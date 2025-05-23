# Amazon DynamoDB DataMapper Library

[![Apache 2 License](@TBD)](http://aws.amazon.com/apache-2-0/)

This library provides a DataMapper class that enables seamless mapping between your application’s domain models and their persisted representation in DynamoDB. Define your schema once—using decorators or metadata—and interact with DynamoDB using object-oriented methods like put, get, query, and scan.

Built for modern async/await workflows and powered by a custom marshalling engine, this library brings clarity and type safety to your data access layer.

## Getting started

> Work in progress! The types and interface are subject to change as implementation and review progress.

### Install

```bash
npm install @aws-sdk/lib-dynamodb-data-mapper
```

> Other dependencies:

```bash
npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb
```

### DataMapper public interface

> Subject to change due to review and implementation in progress

```typescript
/**
 * @public
 * Interface for a schema-aware DataMapper supporting both low-level and high-level operations.
 *
 * High-level methods operate on domain objects with schema metadata (via decorators or static symbols).
 * Low-level methods accept raw AWS SDK command inputs for advanced use cases.
 *
 * @design
 * For now, this interface supports both styles of working with domain models:
 *
 * 1. **Metadata-based models** – where schema and table are defined using static symbols:
 *    - `static [DynamoDbSchema] = { ... }`
 *    - `static [DynamoDbTable] = "TableName"`
 *
 * 2. **Decorator-based models** – where schema and table metadata are defined using decorators:
 *    - `@DynamoDbTable("TableName")`
 *    - `@hashKey()`, `@attribute()`, etc.
 *
 * This dual compatibility allows gradual migration and flexibility for different application styles.
 */
export interface IDataMapper {
  /**
   * Save a domain model object to DynamoDB using its schema metadata.
   *
   * @param item - The model instance with schema/table metadata.
   * @param options - Optional HTTP handler options.
   * @returns The saved item.
   */
  put<T extends object>(item: T, options?: HttpHandlerOptions): Promise<T>;

  /**
   * Send a raw PutCommand to DynamoDB.
   *
   * @param input - A full PutCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  put(input: PutCommandInput, options?: HttpHandlerOptions): Promise<PutCommandOutput>;

  /**
   * Retrieve and hydrate a domain object using schema metadata.
   *
   * @param key - The primary key of the item.
   * @param modelCtor - The model class constructor.
   * @param options - Optional HTTP handler options.
   * @returns A hydrated instance of the model.
   */
  get<T extends object>(key: Partial<T>, modelCtor: new () => T, options?: HttpHandlerOptions): Promise<T>;

  /**
   * Send a raw GetCommand to DynamoDB.
   *
   * @param input - A full GetCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  get(input: GetCommandInput, options?: HttpHandlerOptions): Promise<GetCommandOutput>;

  /**
   * Delete a domain object by key using schema metadata.
   *
   * @param key - The key of the item to delete.
   * @param modelCtor - The model class constructor.
   * @param options - Optional HTTP handler options.
   * @returns The deleted item, if it existed.
   */
  delete<T extends object>(key: Partial<T>, modelCtor: new () => T, options?: HttpHandlerOptions): Promise<T>;

  /**
   * Send a raw DeleteCommand to DynamoDB.
   *
   * @param input - A full DeleteCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  delete(input: DeleteCommandInput, options?: HttpHandlerOptions): Promise<DeleteCommandOutput>;

  /**
   * Query domain objects using a model constructor and key conditions.
   *
   * @param modelCtor - The model class constructor.
   * @param options - Query options excluding TableName (inferred from metadata).
   * @returns An async iterable of hydrated model instances.
   */
  query<T extends object>(modelCtor: new () => T, options: Omit<QueryCommandInput, "TableName">): AsyncIterable<T>;

  /**
   * Send a raw QueryCommand to DynamoDB.
   *
   * @param input - A full QueryCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  query(input: QueryCommandInput, options?: HttpHandlerOptions): Promise<QueryCommandOutput>;

  /**
   * Scan a table using schema metadata and return hydrated objects.
   *
   * @param modelCtor - The model class constructor.
   * @param options - Optional scan options (excluding TableName).
   * @returns An async iterable of hydrated model instances.
   */
  scan<T extends object>(modelCtor: new () => T, options?: Omit<ScanCommandInput, "TableName">): AsyncIterable<T>;

  /**
   * Send a raw ScanCommand to DynamoDB.
   *
   * @param input - A full ScanCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  scan(input: ScanCommandInput, options?: HttpHandlerOptions): Promise<ScanCommandOutput>;
}
```

### Define a Model - Decorator Style

> Keep in mind that the current implementation does not yet include support for decorators.

```typescript
import { DynamoDbTable, hashKey, attribute, embedded } from "@aws-sdk/lib-dynamodb-data-mapper/decorators";

class Address {
  @attribute()
  street!: string;

  @attribute()
  city!: string;
}

@DynamoDbTable("Users")
class User {
  @hashKey()
  id!: string;

  @attribute()
  name!: string;

  @embedded(() => Address)
  address!: Address;
}
```

This example demonstrates how to save and retrieve a decorated User model using DataMapper.
Schema and table metadata are resolved automatically from the class, enabling clean object-oriented access to DynamoDB.

```typescript
import { DataMapper } from "@aws-sdk/lib-dynamodb-data-mapper";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const mapper = new DataMapper({ client });

// Save a user
const user = new User();
user.id = "u123";
user.name = "Alice";
user.address = { street: "123 Main St", city: "Metropolis" };

await mapper.put(user);

// Load a user
const result = await mapper.get({ id: "u123" }, User);

console.log(result);
// Outputs:
//  User {
//   id: 'u123',
//   name: 'Alice',
//   address: { street: '123 Main St', city: 'Metropolis' }
//  }
```

### Define a Model - Metadata Style

```typescript
iimport { DynamoDbSchema, DynamoDbTable } from '@aws-sdk/lib-dynamodb-data-mapper';

class MyDomainModel {
  id!: string;
  name?: string;

  static [DynamoDbSchema] = {
    id: { type: 'String', keyType: 'HASH' },
    name: { type: 'String' },
  };

  static [DynamoDbTable] = 'MyDomainTable';
}
```

The schema and table name may be declared as property accessors directly on the
class if the value should be determined dynamically:

```typescript
import { DynamoDbSchema, DynamoDbTable } from "@aws-sdk/lib-dynamodb-data-mapper";

class MyOtherDomainModel {
  orderId!: string;
  amount!: number;
  tenantId: string;

  constructor(tenantId: string) {
    this.tenantId = tenantId;
  }

  get [DynamoDbSchema]() {
    return {
      orderId: { type: "String", keyType: "HASH" },
      amount: { type: "Number" },
    };
  }

  get [DynamoDbTable]() {
    return `Tenant_${this.tenantId}_MyOtherDomainTable`;
  }
}
```

Next, create an instance of `DataMapper` and use the `MyDomainClass` constructor
defined above to save and load objects from DynamoDB:

```typescript
import { DataMapper } from "@aws-sdk/lib-dynamodb-data-mapper";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

class MyDomainModel {
  id!: string;
  name?: string;
};

Object.defineProperties(MyDomainModel.prototype, {
  [DynamoDbTable]: {
    value: "MyDomainTable",
  },
  [DynamoDbSchema]: {
    id: { type: "String", keyType: "HASH" },
    name: { type: "String" },
  };
};

// Step 1: Create a DynamoDBDocumentClient
const client = DynamoDBDocumentClient.from(new DynamoDBClient({}));

// Step 2: Create an instance of DataMapper
const mapper = new DataMapper({ client });

// Step 3: Create and save an object
const item = new MyDomainModel();
item.id = '123';
item.name = 'Test Object';

await mapper.put(item);

// Step 4: Load the same object by key
const loaded = await mapper.get({ id: '123' }, MyDomainClass);

console.log(loaded); // MyDomainClass { id: '123', name: 'Test Object' }
```

## Supported operations

> !!!TBD

> Below is a copy of DataMapperV2

### `batchGet`

Fetches any number of items from one or more tables in batches of 100 or fewer
items. Unprocessed reads are retried following an exponentially increasing
backoff delay that is applied on a per-table basis.

Takes two parameters:

- An iterable (synchronous or asynchronous) of items to fetch. Each item must be
  an instance of a class with a table name accessible via a property
  identified with the `DynamoDbTable` symbol and a schema accessible via a
  property identified with the `DynamoDbSchema` symbol.

- (Optional) An object specifying any of the following options:

  - `readConsistency` - Specify `'strong'` to perform a strongly consistent
    read. Specify `'eventual'` (the default) to perform an eventually
    consistent read.

  - `perTableOptions` - An object whose keys are table names and whose values
    are objects specifying any of the following options:

    - `readConsistency` - Specify `'strong'` to perform a strongly
      consistent read. Specify `'eventual'` (the default) to perform an
      eventually consistent read.

    - `projection` - A projection expression directing DynamoDB to return a
      subset of the fetched item's attributes. Please refer to the
      documentation for the `@aws/dynamodb-expressions` package for
      guidance on creating projection expression objects.

    - `projectionSchema` - The schema to use when mapping the supplied
      `projection` option to the attribute names used in DynamoDB.

      This parameter is only necessary if a batch contains items from
      multiple classes that map to the _same_ table using _different_
      property names to represent the same DynamoDB attributes.

      If not supplied, the schema associated with the first item
      associated with a given table will be used in its place.

### `batchPut`

Puts any number of items to one or more tables in batches of 25 or fewer items.
Unprocessed puts are retried following an exponentially increasing backoff delay
that is applied on a per-table basis.

Returns an async iterable of items that have been put (put items are yielded
when the put has been accepted by DynamoDB). The results can be consumed with a
`for-await-of` loop. If you are using TypeScript, you will need to include
`esnext.asynciterable` in your `lib` declaration (as well as enabling
`downlevelIteration` if targeting ES5 or lower). Please refer to [the TypeScript
release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-iteration)
for more information.

Takes one parameter:

- An iterable (synchronous or asynchronous) of items to put. Each item must be
  an instance of a class with a table name accessible via a property
  identified with the `DynamoDbTable` symbol and a schema accessible via a
  property identified with the `DynamoDbSchema` symbol.

### `batchWrite`

Puts or deletes any number of items to one or more tables in batches of 25 or
fewer items. Unprocessed writes are retried following an exponentially
increasing backoff delay that is applied on a per-table basis.

Returns an async iterable of tuples of the string 'put'|'delete' and the item on
which the specified write action was performed. The results can be consumed with
a `for-await-of` loop. If you are using TypeScript, you will need to include
`esnext.asynciterable` in your `lib` declaration (as well as enabling
`downlevelIteration` if targeting ES5 or lower). Please refer to [the TypeScript
release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-iteration)
for more information.

Takes one parameter:

- An iterable (synchronous or asynchronous) of tuples of the string
  'put'|'delete' and the item on which to perform the specified write action.
  Each item must be an instance of a class with a table name accessible via a
  property identified with the `DynamoDbTable` symbol and a schema accessible
  via a property identified with the `DynamoDbSchema` symbol.

### `delete`

Removes an item from a DynamoDB table. Takes two parameters:

- The item to be deleted. Must be an instance of a class with a table name
  accessible via a property identified with the `DynamoDbTable` symbol and a
  schema accessible via a property identified with the `DynamoDbSchema`
  symbol.

- (Optional) An object specifying any of the following options:

  - `condition` - A condition expression whose assertion must be satisfied in
    order for the delete operation to be executed. Please refer to the
    documentation for the `@aws/dynamodb-expressions` package for guidance
    on creating condition expression objects.

  - `returnValues` - Specify `'ALL_OLD'` to have the deleted item returned to
    you when the delete operation completes.

  - `skipVersionCheck` - Whether to forgo creating a condition expression
    based on a defined `versionAttribute` in the schema.

### `get`

Fetches an item from a DynamoDB table. If no item with the specified key was
found, the returned promise will be rejected with an error. Takes two
parameters:

- The item to be fetched. Must be an instance of a class with a table name
  accessible via a property identified with the `DynamoDbTable` symbol and a
  schema accessible via a property identified with the `DynamoDbSchema`
  symbol.

  The supplied item will **NOT** be updated in place. Rather, a new item of
  the same class with data from the DynamoDB table will be returned.

- (Optional) An object specifying any of the following options:

  - `readConsistency` - Specify `'strong'` to perform a strongly consistent
    read. Specify `'eventual'` (the default) to perform an eventually
    consistent read.

  - `projection` - A projection expression directing DynamoDB to return a
    subset of the fetched item's attributes. Please refer to the
    documentation for the `@aws/dynamodb-expressions` package for guidance
    on creating projection expression objects.

### `put`

Inserts an item into a DynamoDB table. Takes two parameters:

- The item to be inserted. Must be an instance of a class with a table name
  accessible via a property identified with the `DynamoDbTable` symbol and a
  schema accessible via a property identified with the `DynamoDbSchema`
  symbol.

- (Optional) An object specifying any of the following options:

  - `condition` - A condition expression whose assertion must be satisfied in
    order for the put operation to be executed. Please refer to the
    documentation for the `@aws/dynamodb-expressions` package for guidance
    on creating condition expression objects.

  - `returnValues` - Specify `'ALL_OLD'` to have the overwritten item (if one
    existed) returned to you when the put operation completes.

  - `skipVersionCheck` - Whether to forgo creating a condition expression
    based on a defined `versionAttribute` in the schema.

### `query`

Retrieves multiple values from a table or index based on the primary key
attributes. Queries must target a single partition key value but may read
multiple items with different range keys.

This method is implemented as an async iterator and the results can be consumed
with a `for-await-of` loop. If you are using TypeScript, you will need to
include `esnext.asynciterable` in your `lib` declaration (as well as enabling
`downlevelIteration` if targeting ES5 or lower). Please refer to [the TypeScript
release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-iteration)
for more information.

Takes three parameters:

- The constructor function to use for any results returned by this operation.
  Must have a prototype with a table name accessible via a property identified
  with the `DynamoDbTable` symbol and a schema accessible via a property
  identified with the `DynamoDbSchema` symbol.

- The condition that specifies the key value(s) for items to be retrieved by the
  query operation. You may provide a hash matching key properties to the
  values they must equal, a hash matching keys to
  `ConditionExpressionPredicate`s, or a fully composed `ConditionExpression`.
  If a hash is provided, it may contain a mixture of condition expression
  predicates and exact value matches:

  ```typescript
  import { between } from "@aws/dynamodb-expressions";

  const keyCondition = {
    partitionKey: "foo",
    rangeKey: between(10, 99),
  };
  ```

  The key condition must target a single value for the partition key.

  Please refer to the documentation for the `@aws/dynamodb-expressions`
  package for guidance on creating condition expression objects.

- (Optional) An object specifying any of the following options:

  - `filter` - A condition expression that DynamoDB applies after the Query
    operation, but before the data is returned to you. Items that do not
    satisfy the `filter` criteria are not returned.

    You cannot define a filter expression based on a partition key or a sort
    key.

    Please refer to the documentation for the `@aws/dynamodb-expressions`
    package for guidance on creating condition expression objects.

  - `indexName` - The name of the index against which to execute this query.
    If not specified, the query will be executed against the base table.

  - `limit` - The maximum number of items to return.

  - `pageSize` - The maximum number of items to return **per page of results**.

  - `projection` - A projection expression directing DynamoDB to return a
    subset of any fetched item's attributes. Please refer to the
    documentation for the `@aws/dynamodb-expressions` package for guidance
    on creating projection expression objects.

  - `readConsistency` - Specify `'strong'` to perform a strongly consistent
    read. Specify `'eventual'` (the default) to perform an eventually
    consistent read.

  - `scanIndexForward` - Specifies the order for index traversal: If true, the
    traversal is performed in ascending order; if false, the traversal is
    performed in descending order.

  - `startKey` - The primary key of the first item that this operation will
    evaluate.

#### Query metadata

The iterator returned by `query` will keep track of the number of items yielded
and the number of items scanned via its `count` and `scannedCount` properties:

```typescript
const iterator = mapper.query(MyClass, { partitionKey: "foo", rangeKey: between(0, 10) });
for await (const record of iterator) {
  console.log(record, iterator.count, iterator.scannedCount);
}
```

#### Pagination

If you wish to perform a resumable query, you can use the `.pages()` method of
the iterator returned by `query` to access the underlying paginator. The
paginator differs from the iterator in that it yields arrays of unmarshalled
records and has a `lastEvaluatedKey` property that may be provided to a new
call to `mapper.query` to resume the query later or in a separate process:

```typescript
const paginator = mapper
  .query(
    MyClass,
    { partitionKey: "foo", rangeKey: between(0, 10) },
    {
      // automatically stop after 25 items or the entire result set has been
      // fetched, whichever is smaller
      limit: 25,
    }
  )
  .pages();

for await (const page of paginator) {
  console.log(paginator.count, paginator.scannedCount, paginator.lastEvaluatedKey);
}

const newPaginator = mapper
  .query(
    MyClass,
    { partitionKey: "foo", rangeKey: between(0, 10) },
    {
      // start this new paginator where the previous one stopped
      startKey: paginator.lastEvaluatedKey,
    }
  )
  .pages();
```

### `scan`

Retrieves all values in a table or index.

This method is implemented as an async iterator and the results can be consumed
with a `for-await-of` loop. If you are using TypeScript, you will need to
include `esnext.asynciterable` in your `lib` declaration (as well as enabling
`downlevelIteration` if targeting ES5 or lower). Please refer to [the TypeScript
release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-iteration)
for more information.

Takes two parameters:

- The constructor function to use for any results returned by this operation.
  Must have a prototype with a table name accessible via a property identified
  with the `DynamoDbTable` symbol and a schema accessible via a property
  identified with the `DynamoDbSchema` symbol.

- (Optional) An object specifying any of the following options:

  - `filter` - A condition expression that DynamoDB applies after the scan
    operation, but before the data is returned to you. Items that do not
    satisfy the `filter` criteria are not returned.

    You cannot define a filter expression based on a partition key or a sort
    key.

    Please refer to the documentation for the `@aws/dynamodb-expressions`
    package for guidance on creating condition expression objects.

  - `indexName` - The name of the index against which to execute this query.
    If not specified, the query will be executed against the base table.

  - `limit` - The maximum number of items to return.

  - `pageSize` - The maximum number of items to return **per page of results**.

  - `projection` - A projection expression directing DynamoDB to return a
    subset of any fetched item's attributes. Please refer to the
    documentation for the `@aws/dynamodb-expressions` package for guidance
    on creating projection expression objects.

  - `readConsistency` - Specify `'strong'` to perform a strongly consistent
    read. Specify `'eventual'` (the default) to perform an eventually
    consistent read.

  - `segment` - The identifier for this segment (if this scan is being
    performed as part of a parallel scan operation).

  - `startKey` - The primary key of the first item that this operation will
    evaluate.

  - `totalSegments` - The number of segments into which this scan has been
    divided (if this scan is being performed as part of a parallel scan
    operation).

#### Scan metadata

The iterator returned by `scan` will keep track of the number of items yielded
and the number of items scanned via its `count` and `scannedCount` properties:

```typescript
const iterator = mapper.scan(MyClass);
for await (const record of iterator) {
  console.log(record, iterator.count, iterator.scannedCount);
}
```

#### Pagination

If you wish to perform a resumable scan, you can use the `.pages()` method of
the iterator returned by `scan` to access the underlying paginator. The
paginator differs from the iterator in that it yields arrays of unmarshalled
records and has a `lastEvaluatedKey` property that may be provided to a new
call to `mapper.scan` to resume the scan later or in a separate process:

```typescript
const paginator = mapper
  .scan(MyClass, {
    // automatically stop after 25 items or the entire result set has been
    // fetched, whichever is smaller
    limit: 25,
  })
  .pages();
for await (const page of paginator) {
  console.log(paginator.count, paginator.scannedCount, paginator.lastEvaluatedKey);
}

const newPaginator = mapper
  .scan(MyClass, {
    // start this new paginator where the previous one stopped
    startKey: paginator.lastEvaluatedKey,
  })
  .pages();
```

### `parallelScan`

Retrieves all values in a table by dividing the table into segments, all of
which are scanned in parallel.

This method is implemented as an async iterator and the results can be consumed
with a `for-await-of` loop. If you are using TypeScript, you will need to
include `esnext.asynciterable` in your `lib` declaration (as well as enabling
`downlevelIteration` if targeting ES5 or lower). Please refer to [the TypeScript
release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#async-iteration)
for more information.

Takes three parameters:

- The constructor to use for any results returned by this operation. Must have a
  prototype with a table name accessible via a property identified with the
  `DynamoDbTable` symbol and a schema accessible via a property identified
  with the `DynamoDbSchema` symbol.

- The total number of parallel workers to use to scan the table.

- (Optional) An object specifying any of the following options:

  - `filter` - A condition expression that DynamoDB applies after the scan
    operation, but before the data is returned to you. Items that do not
    satisfy the `filter` criteria are not returned.

    You cannot define a filter expression based on a partition key or a sort
    key.

    Please refer to the documentation for the `@aws/dynamodb-expressions`
    package for guidance on creating condition expression objects.

  - `indexName` - The name of the index against which to execute this query.
    If not specified, the query will be executed against the base table.

  - `pageSize` - The maximum number of items to return **per page of results**.

  - `projection` - A projection expression directing DynamoDB to return a
    subset of any fetched item's attributes. Please refer to the
    documentation for the `@aws/dynamodb-expressions` package for guidance
    on creating projection expression objects.

  - `readConsistency` - Specify `'strong'` to perform a strongly consistent
    read. Specify `'eventual'` (the default) to perform an eventually
    consistent read.

  - `startKey` - The primary key of the first item that this operation will
    evaluate.

#### Scan metadata

The iterator returned by `parallelScan` will keep track of the number of items
yielded and the number of items scanned via its `count` and `scannedCount`
properties:

```typescript
const iterator = mapper.parallelScan(MyClass, 4);
for await (const record of iterator) {
  console.log(record, iterator.count, iterator.scannedCount);
}
```

#### Pagination

If you wish to perform a resumable parallel scan, you can use the `.pages()`
method of the iterator returned by `parallelScan` to access the underlying
paginator. The paginator differs from the iterator in that it yields arrays of
unmarshalled records and has a `scanState` property that may be provided
to a new call to `mapper.parallelScan` to resume the scan later or in a separate
process:

```typescript
const paginator = mapper.parallelScan(MyClass, 4).pages();
for await (const page of paginator) {
  console.log(paginator.count, paginator.scannedCount, paginator.lastEvaluatedKey);

  break;
}

const newPaginator = mapper
  .parallelScan(MyClass, 4, {
    // start this new paginator where the previous one stopped
    scanState: paginator.scanState,
  })
  .pages();
```

### `update`

Updates an item in a DynamoDB table. Will leave attributes not defined in the
schema in place.

Takes two parameters:

- The item with its desired property state. Must be an instance of a class with
  a table name accessible via a property identified with the `DynamoDbTable`
  symbol and a schema accessible via a property identified with the
  `DynamoDbSchema` symbol.

- (Optional) An object specifying any of the following options:

  - `condition` - A condition expression whose assertion must be satisfied in
    order for the update operation to be executed. Please refer to the
    documentation for the `@aws/dynamodb-expressions` package for guidance
    on creating condition expression objects.

  - `onMissing` - Specify `'remove'` (the default) to treat the absence of a
    value in the supplied `item` as a directive to remove the property from
    the record in DynamoDB. Specify `'skip'` to only update the properties
    that are defined in the supplied `item`.

  - `skipVersionCheck` - Whether to forgo creating a condition expression
    based on a defined `versionAttribute` in the schema.

### `executeUpdateExpression`

Executes a custom update expression. This method will **not** automatically
apply a version check, as the current state of the object being updated is not
known.

Takes four parameters:

- The expression to execute. Please refer to the documentation for the
  `@aws/dynamodb-expressions` package for guidance on creating update
  expression objects.

- The key of the item being updated.

- The constructor for the class mapped to the table against which the expression
  should be run. Must have a prototype with a table name accessible via a
  property identified with the `DynamoDbTable` symbol and a schema accessible
  via a property identified with the `DynamoDbSchema` symbol.

- (Optional) An object specifying any of the following options:

  - `condition` - A condition expression whose assertion must be satisfied in
    order for the update operation to be executed. Please refer to the
    documentation for the `@aws/dynamodb-expressions` package for guidance
    on creating condition expression objects.
