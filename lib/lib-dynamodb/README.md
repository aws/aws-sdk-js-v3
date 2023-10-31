# @aws-sdk/lib-dynamodb

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/lib-dynamodb/latest.svg)](https://www.npmjs.com/package/@aws-sdk/lib-dynamodb)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/lib-dynamodb.svg)](https://www.npmjs.com/package/@aws-sdk/lib-dynamodb)

## Overview

The document client simplifies working with items in Amazon DynamoDB by
abstracting away the notion of attribute values. This abstraction annotates native
JavaScript types supplied as input parameters, as well as converts annotated
response data to native JavaScript types.

## Marshalling Input and Unmarshalling Response Data

The document client affords developers the use of native JavaScript types
instead of `AttributeValue`s to simplify the JavaScript development
experience with Amazon DynamoDB. JavaScript objects passed in as parameters
are marshalled into `AttributeValue` shapes required by Amazon DynamoDB.
Responses from DynamoDB are unmarshalled into plain JavaScript objects
by the `DocumentClient`. The `DocumentClient` does not accept
`AttributeValue`s in favor of native JavaScript types.

|          JavaScript Type           | DynamoDB AttributeValue |
| :--------------------------------: | ----------------------- |
|               String               | S                       |
|   Number / BigInt / NumberValue    | N                       |
|              Boolean               | BOOL                    |
|                null                | NULL                    |
|               Array                | L                       |
|               Object               | M                       |
|    Set\<Uint8Array, Blob, ...\>    | BS                      |
| Set\<Number, BigInt, NumberValue\> | NS                      |
|           Set\<String\>            | SS                      |
| Uint8Array, Buffer, File, Blob...  | B                       |

### Example

Here is an example list which is sent to DynamoDB client in an operation:

```json
{ "L": [{ "NULL": true }, { "BOOL": false }, { "N": 1 }, { "S": "two" }] }
```

The DynamoDB document client abstracts the attribute values as follows in
both input and output:

```json
[null, false, 1, "two"]
```

## Usage

To create document client you need to create DynamoDB client first as follows:

```js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"; // ES6 import
// const { DynamoDBClient } = require("@aws-sdk/client-dynamodb"); // CommonJS import

// Bare-bones DynamoDB Client
const client = new DynamoDBClient({});
```

```js
import { DynamoDB } from "@aws-sdk/client-dynamodb"; // ES6 import
// const { DynamoDB } = require("@aws-sdk/client-dynamodb"); // CommonJS import

// Full DynamoDB Client
const client = new DynamoDB({});
```

The bare-bones clients are more modular. They reduce bundle size and improve
loading performance over full clients as explained in blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

### Constructor

Once DynamoDB client is created, you can either create the bare-bones
document client or full document client as follows:

```js
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"; // ES6 import
// const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb"); // CommonJS import

// Bare-bones document client
const ddbDocClient = DynamoDBDocumentClient.from(client); // client is DynamoDB client
```

```js
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"; // ES6 import
// const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb"); // CommonJS import

// Full document client
const ddbDocClient = DynamoDBDocument.from(client); // client is DynamoDB client
```

### Configuration

The configuration for marshalling and unmarshalling can be sent as an optional
second parameter during creation of document client as follows:

```ts
export interface marshallOptions {
  /**
   * Whether to automatically convert empty strings, blobs, and sets to `null`
   */
  convertEmptyValues?: boolean;
  /**
   * Whether to remove undefined values while marshalling.
   */
  removeUndefinedValues?: boolean;
  /**
   * Whether to convert typeof object to map attribute.
   */
  convertClassInstanceToMap?: boolean;
  /**
   * Whether to convert the top level container
   * if it is a map or list.
   *
   * Default is true when using the DynamoDBDocumentClient,
   * but false if directly using the marshall function (backwards compatibility).
   */
  convertTopLevelContainer?: boolean;
}

export interface unmarshallOptions {
  /**
   * Whether to return numbers as a string instead of converting them to native JavaScript numbers.
   * This allows for the safe round-trip transport of numbers of arbitrary size.
   */
  wrapNumbers?: boolean;

  /**
   * When true, skip wrapping the data in `{ M: data }` before converting.
   *
   * Default is true when using the DynamoDBDocumentClient,
   * but false if directly using the unmarshall function (backwards compatibility).
   */
  convertWithoutMapWrapper?: boolean;
}

const marshallOptions: marshallOptions = {};
const unmarshallOptions: unmarshallOptions = {};

const translateConfig = { marshallOptions, unmarshallOptions };

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocument.from(client, translateConfig);
```

### Calling operations

You can call the document client operations using command objects on bare-bones
client as follows:

```js
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// ... DynamoDB client creation

const ddbDocClient = DynamoDBDocumentClient.from(client);
// Call using bare-bones client and Command object.
await ddbDocClient.send(
  new PutCommand({
    TableName,
    Item: {
      id: "1",
      content: "content from DynamoDBDocumentClient",
    },
  })
);
```

You can also call operations on full client as follows:

```js
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

// ... DynamoDB client creation

const ddbDocClient = DynamoDBDocument.from(client);
// Call using full client.
await ddbDocClient.put({
  TableName,
  Item: {
    id: "2",
    content: "content from DynamoDBDocument",
  },
});
```

### Large Numbers and `NumberValue`.

On the input or marshalling side, the class `NumberValue` can be used
anywhere to represent a DynamoDB number value, even small numbers.

```ts
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { NumberValue, DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

// Note, the client will not validate the acceptability of the number
// in terms of size or format.
// It is only here to preserve your precise representation.
const client = DynamoDBDocument.from(new DynamoDB({}));

await client.put({
  Item: {
    id: 1,
    smallNumber: NumberValue.from("123"),
    bigNumber: NumberValue.from("1000000000000000000000.000000000001"),
    nSet: new Set([123, NumberValue.from("456"), 789]),
  },
});
```

On the output or unmarshalling side, the class `NumberValue` is used
depending on your setting for the `unmarshallOptions` flag `wrapnumbers`,
shown above.

```ts
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { NumberValue, DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const client = DynamoDBDocument.from(new DynamoDB({}));

const response = await client.get({
  Key: {
    id: 1,
  },
});

/**
 * Numbers in the response may be a number, a BigInt, or a NumberValue depending
 * on how you set `wrapNumbers`.
 */
const value = response.Item.bigNumber;
```

`NumberValue` does not provide a way to do mathematical operations on itself.
To do mathematical operations, take the string value of `NumberValue` by calling
`.toString()` and supply it to your chosen big number implementation.

### Client and Command middleware stacks

As with other AWS SDK for JavaScript v3 clients, you can apply middleware functions
both on the client itself and individual `Command`s.

For individual `Command`s, here are examples of how to add middleware before and after
both marshalling and unmarshalling. We will use `QueryCommand` as an example.
Others follow the same pattern.

```js
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  /*...*/
});
const doc = DynamoDBDocumentClient.from(client);
const command = new QueryCommand({
  /*...*/
});
```

Before and after marshalling:

```js
command.middlewareStack.addRelativeTo(
  (next) => async (args) => {
    console.log("pre-marshall", args.input);
    return next(args);
  },
  {
    relation: "before",
    toMiddleware: "DocumentMarshall",
  }
);
command.middlewareStack.addRelativeTo(
  (next) => async (args) => {
    console.log("post-marshall", args.input);
    return next(args);
  },
  {
    relation: "after",
    toMiddleware: "DocumentMarshall",
  }
);
```

Before and after unmarshalling:

```js
command.middlewareStack.addRelativeTo(
  (next) => async (args) => {
    const result = await next(args);
    console.log("pre-unmarshall", result.output.Items);
    return result;
  },
  {
    relation: "after", // <- after for pre-unmarshall
    toMiddleware: "DocumentUnmarshall",
  }
);
command.middlewareStack.addRelativeTo(
  (next) => async (args) => {
    const result = await next(args);
    console.log("post-unmarshall", result.output.Items);
    return result;
  },
  {
    relation: "before", // <- before for post-unmarshall
    toMiddleware: "DocumentUnmarshall",
  }
);
```

### Destroying document client

The `destroy()` call on document client is a no-op as document client does not
create a new DynamoDB client. You need to call `destroy()` on DynamoDB client to
clean resources used by it as shown below.

```js
const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

// Perform operations on document client.

ddbDocClient.destroy(); // no-op
client.destroy(); // destroys DynamoDBClient
```
