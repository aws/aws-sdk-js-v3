import { PutApprovalResultInput } from "../shapes/PutApprovalResultInput";
import { PutApprovalResultOutput } from "../shapes/PutApprovalResultOutput";
import { InvalidApprovalTokenException } from "../shapes/InvalidApprovalTokenException";
import { ApprovalAlreadyCompletedException } from "../shapes/ApprovalAlreadyCompletedException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { StageNotFoundException } from "../shapes/StageNotFoundException";
import { ActionNotFoundException } from "../shapes/ActionNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
