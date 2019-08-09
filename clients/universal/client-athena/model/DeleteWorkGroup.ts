import { DeleteWorkGroupInput } from "./DeleteWorkGroupInput";
import { DeleteWorkGroupOutput } from "./DeleteWorkGroupOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
