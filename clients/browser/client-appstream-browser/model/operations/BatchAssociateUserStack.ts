import { BatchAssociateUserStackInput } from "../shapes/BatchAssociateUserStackInput";
import { BatchAssociateUserStackOutput } from "../shapes/BatchAssociateUserStackOutput";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchAssociateUserStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchAssociateUserStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchAssociateUserStackInput
  },
  output: {
    shape: BatchAssociateUserStackOutput
  },
  errors: [
    {
      shape: OperationNotPermittedException
    }
  ]
};
