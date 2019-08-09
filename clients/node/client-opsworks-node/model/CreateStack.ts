import { CreateStackInput } from "./CreateStackInput";
import { CreateStackOutput } from "./CreateStackOutput";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
