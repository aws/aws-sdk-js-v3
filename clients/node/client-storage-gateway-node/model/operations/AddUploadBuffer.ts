import { AddUploadBufferInput } from "../shapes/AddUploadBufferInput";
import { AddUploadBufferOutput } from "../shapes/AddUploadBufferOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
