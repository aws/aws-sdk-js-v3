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

### Example

Here is an example `Key` which is sent to DynamoDB client in GetItem operation:

```json
{ "KEY_NAME": { "ATTRIBUTE_VALUE": VALUE } }
```

where `ATTRIBUTE_VALUE` can be one of the following:

| ATTRIBUTE_VALUE | type       | TypeScript type                        |
| --------------- | ---------- | -------------------------------------- |
| NULL            | Null       | null                                   |
| BOOL            | Boolean    | boolean                                |
| BS              | Binary Set | Set\<Unit8Array\>                      |
| NS              | Number Set | Set\<number \| BigInt\>                |
| SS              | String Set | Set\<string\>                          |
| S               | String     | string                                 |
| B               | Binary     | Uint8Array, Buffer, File, Blob...      |
| M               | Map        | { [key: string]: \<ATTRIBUTE_VALUE\> } |
| L               | List       | \<ATTRIBUTE_VALUE\>[]                  |
| N               | Number     | number, BigInt                         |

The DynamoDB document client should abstract the attribute values as follows in
both input and output:

```json
{ "KEY_NAME": VALUE }
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

// Bare-bones DynamoDB Client
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

// Bare-bones DocumentClient
const ddbDocClient = DynamoDBDocumentClient.from(client); // client is DynamoDB client
```

```js
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"; // ES6 import
// const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb"); // CommonJS import

// Full DocumentClient
const ddbDocClient = DynamoDBDocument.from(client); // client is DynamoDB client
```

### Configuration

The configuration for marshalling and unmarshalling can be sent as an optional
second parameter during creation of document client as follows:

```js
const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false; // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false; // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false; // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false; // false, by default.
};

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
