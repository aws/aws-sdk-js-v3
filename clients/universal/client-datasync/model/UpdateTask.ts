import { UpdateTaskInput } from "./UpdateTaskInput";
import { UpdateTaskOutput } from "./UpdateTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTaskInput
  },
  output: {
    shape: UpdateTaskOutput
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
