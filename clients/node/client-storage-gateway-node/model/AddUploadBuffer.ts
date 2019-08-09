import { AddUploadBufferInput } from "./AddUploadBufferInput";
import { AddUploadBufferOutput } from "./AddUploadBufferOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddUploadBuffer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddUploadBuffer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddUploadBufferInput
  },
  output: {
    shape: AddUploadBufferOutput
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
