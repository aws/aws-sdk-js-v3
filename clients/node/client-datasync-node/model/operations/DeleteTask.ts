import { DeleteTaskInput } from "../shapes/DeleteTaskInput";
import { DeleteTaskOutput } from "../shapes/DeleteTaskOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
