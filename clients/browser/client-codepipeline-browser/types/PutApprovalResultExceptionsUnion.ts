import { InvalidApprovalTokenException } from "./InvalidApprovalTokenException";
import { ApprovalAlreadyCompletedException } from "./ApprovalAlreadyCompletedException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { StageNotFoundException } from "./StageNotFoundException";
import { ActionNotFoundException } from "./ActionNotFoundException";
import { ValidationException } from "./ValidationException";
export type PutApprovalResultExceptionsUnion =
  | InvalidApprovalTokenException
  | ApprovalAlreadyCompletedException
  | PipelineNotFoundException
  | StageNotFoundException
  | ActionNotFoundException
  | ValidationException;
