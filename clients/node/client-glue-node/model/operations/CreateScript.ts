import { CreateScriptInput } from "../shapes/CreateScriptInput";
import { CreateScriptOutput } from "../shapes/CreateScriptOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateScript: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateScript",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateScriptInput
  },
  output: {
    shape: CreateScriptOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
