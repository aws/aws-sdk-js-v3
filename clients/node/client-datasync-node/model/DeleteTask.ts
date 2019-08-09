import { DeleteTaskInput } from "./DeleteTaskInput";
import { DeleteTaskOutput } from "./DeleteTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTaskInput
  },
  output: {
    shape: DeleteTaskOutput
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
