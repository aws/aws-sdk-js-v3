import { CreateTaskInput } from "./CreateTaskInput";
import { CreateTaskOutput } from "./CreateTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTaskInput
  },
  output: {
    shape: CreateTaskOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
