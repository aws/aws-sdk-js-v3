import { UpdateWorkGroupInput } from "./UpdateWorkGroupInput";
import { UpdateWorkGroupOutput } from "./UpdateWorkGroupOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateWorkGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateWorkGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateWorkGroupInput
  },
  output: {
    shape: UpdateWorkGroupOutput
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
