Perfect — aligning with the existing lib-dynamodb structure is exactly the right move. The AWS SDK v3 is organized for clarity and separation of concerns, and using the same folder structure will help your lib-dynamodb-datamapper integrate naturally into the ecosystem.

⸻

✅ Structure Based on @aws-sdk/lib-dynamodb

Here’s how you should structure your new library:

lib-dynamodb-datamapper/
├── src/
│ ├── baseCommands/ ← shared logic (optional: base class, marshalling utils)
│ ├── commands/ ← put, get, update, delete, etc.
│ ├── pagination/ ← support async iteration over scan/query
│ ├── decorators/ ← @table, @attribute, @embed
│ ├── utils/ ← internal helpers (e.g. metadata reflection)
│ ├── DataMapper.ts ← the public-facing class
│ └── index.ts ← exports DataMapper and decorators

⸻

📂 Explanation of Each Folder

🔹 baseCommands/
• Optional base class or shared logic reused across commands
• Good for things like schema marshalling/unmarshalling, base command input types

🔹 commands/
• Contains individual implementations: PutCommand.ts, GetCommand.ts, etc.
• Each file encapsulates a single logical operation (like SDK Command classes)

🔹 pagination/
• Will contain async iterator helpers for query and scan
• Example: paginateQuery.ts, paginateScan.ts

🔹 decorators/
• @table, @attribute, @embed decorators and related metadata helpers
• Uses reflect-metadata to attach schema info to classes and properties

🔹 utils/
• Pure helpers (e.g., getTableName(), key-building, type detection)
• No side effects or I/O

⸻

✅ Naming Consistency with lib-dynamodb

Existing lib-dynamodb folder Your equivalent
commands/ commands/ for each operation
baseCommand/ baseCommands/ for schema logic
pagination/ pagination/ for async iterables
marshall/ In your case, part of baseCommands
middleware/ Not applicable yet (but possible in future)

⸻

Great question — the distinction between baseCommands and commands in the AWS SDK v3 structure (like in @aws-sdk/lib-dynamodb) is subtle but important. Here’s the difference:

⸻

📂 commands/
• Contains high-level, user-facing operations (e.g., PutCommand.ts, GetCommand.ts)
• Each file typically implements the full logic for a specific public method (e.g., how to handle put() on an object)
• Tied to concrete behaviors like:
• invoking DynamoDB
• validating inputs
• handling marshalling

🔹 Think: “What the library does” (use case logic)

⸻

📂 baseCommands/
• Contains shared low-level logic or base classes that multiple commands rely on
• Examples include:
• abstract base classes
• shared marshalling/unmarshalling logic
• schema-to-DynamoDB conversions
• decorators → command metadata extraction

🔹 Think: “How the library does it under the hood” (reusable building blocks)

⸻

👇 Example

commands/PutCommand.ts

import { buildPutInput } from "../baseCommands/buildPutInput";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export async function runPutCommand(...) {
const input = buildPutInput(...);
return client.send(new PutCommand(input));
}

baseCommands/buildPutInput.ts

export function buildPutInput(item: object, metadata: TableMetadata): PutCommandInput {
return {
TableName: metadata.tableName,
Item: item,
};
}

⸻

💡 Summary

Folder Purpose Typical Contents
commands/ Implements public operations PutCommand.ts, GetCommand.ts, etc.
baseCommands/ Internal shared logic or helpers buildPutInput.ts, marshallItem.ts, etc.

⸻

Let me know if you’d like a base scaffolding for your baseCommands/ folder to support schema marshalling.
