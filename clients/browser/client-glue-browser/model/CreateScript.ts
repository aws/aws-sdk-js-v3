import { CreateScriptInput } from "./CreateScriptInput";
import { CreateScriptOutput } from "./CreateScriptOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
