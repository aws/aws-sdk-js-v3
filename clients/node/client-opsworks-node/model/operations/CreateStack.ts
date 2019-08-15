import { CreateStackInput } from "../shapes/CreateStackInput";
import { CreateStackOutput } from "../shapes/CreateStackOutput";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStackInput
  },
  output: {
    shape: CreateStackOutput
  },
  errors: [
    {
      shape: ValidationException
    }
  ]
};
