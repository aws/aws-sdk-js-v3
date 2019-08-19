import { NotifyWhenUploadedInput } from "../shapes/NotifyWhenUploadedInput";
import { NotifyWhenUploadedOutput } from "../shapes/NotifyWhenUploadedOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const NotifyWhenUploaded: _Operation_ = {
  metadata: ServiceMetadata,
  name: "NotifyWhenUploaded",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: NotifyWhenUploadedInput
  },
  output: {
    shape: NotifyWhenUploadedOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
