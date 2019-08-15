import { BatchDisassociateUserStackInput } from "../shapes/BatchDisassociateUserStackInput";
import { BatchDisassociateUserStackOutput } from "../shapes/BatchDisassociateUserStackOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDisassociateUserStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDisassociateUserStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDisassociateUserStackInput
  },
  output: {
    shape: BatchDisassociateUserStackOutput
  },
  errors: []
};
