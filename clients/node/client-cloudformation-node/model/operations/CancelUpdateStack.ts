import { CancelUpdateStackInput } from "../shapes/CancelUpdateStackInput";
import { CancelUpdateStackOutput } from "../shapes/CancelUpdateStackOutput";
import { TokenAlreadyExistsException } from "../shapes/TokenAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelUpdateStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelUpdateStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelUpdateStackInput
  },
  output: {
    shape: CancelUpdateStackOutput
  },
  errors: [
    {
      shape: TokenAlreadyExistsException
    }
  ]
};
