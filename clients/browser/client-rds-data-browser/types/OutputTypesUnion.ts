import { BatchExecuteStatementOutput } from "./BatchExecuteStatementOutput";
import { BeginTransactionOutput } from "./BeginTransactionOutput";
import { CommitTransactionOutput } from "./CommitTransactionOutput";
import { ExecuteSqlOutput } from "./ExecuteSqlOutput";
import { ExecuteStatementOutput } from "./ExecuteStatementOutput";
import { RollbackTransactionOutput } from "./RollbackTransactionOutput";
export type OutputTypesUnion =
  | BatchExecuteStatementOutput
  | BeginTransactionOutput
  | CommitTransactionOutput
  | ExecuteSqlOutput
  | ExecuteStatementOutput
  | RollbackTransactionOutput;
