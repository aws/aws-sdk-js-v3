import { NotifyWhenUploadedInput } from "./NotifyWhenUploadedInput";
import { NotifyWhenUploadedOutput } from "./NotifyWhenUploadedOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
