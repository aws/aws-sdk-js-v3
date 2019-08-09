import { PutApprovalResultInput } from "./PutApprovalResultInput";
import { PutApprovalResultOutput } from "./PutApprovalResultOutput";
import { InvalidApprovalTokenException } from "./InvalidApprovalTokenException";
import { ApprovalAlreadyCompletedException } from "./ApprovalAlreadyCompletedException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { StageNotFoundException } from "./StageNotFoundException";
import { ActionNotFoundException } from "./ActionNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutApprovalResult: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutApprovalResult",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutApprovalResultInput
  },
  output: {
    shape: PutApprovalResultOutput
  },
  errors: [
    {
      shape: InvalidApprovalTokenException
    },
    {
      shape: ApprovalAlreadyCompletedException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: StageNotFoundException
    },
    {
      shape: ActionNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
