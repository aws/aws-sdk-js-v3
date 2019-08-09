import { BatchExecuteStatementInput } from "./BatchExecuteStatementInput";
import { BeginTransactionInput } from "./BeginTransactionInput";
import { CommitTransactionInput } from "./CommitTransactionInput";
import { ExecuteSqlInput } from "./ExecuteSqlInput";
import { ExecuteStatementInput } from "./ExecuteStatementInput";
import { RollbackTransactionInput } from "./RollbackTransactionInput";
export type InputTypesUnion =
  | BatchExecuteStatementInput
  | BeginTransactionInput
  | CommitTransactionInput
  | ExecuteSqlInput
  | ExecuteStatementInput
  | RollbackTransactionInput;
