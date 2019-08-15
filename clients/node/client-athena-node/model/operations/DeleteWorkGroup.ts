import { DeleteWorkGroupInput } from "../shapes/DeleteWorkGroupInput";
import { DeleteWorkGroupOutput } from "../shapes/DeleteWorkGroupOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteWorkGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteWorkGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteWorkGroupInput
  },
  output: {
    shape: DeleteWorkGroupOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
