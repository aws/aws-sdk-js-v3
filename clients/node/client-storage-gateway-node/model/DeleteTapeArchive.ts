import { DeleteTapeArchiveInput } from "./DeleteTapeArchiveInput";
import { DeleteTapeArchiveOutput } from "./DeleteTapeArchiveOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTapeArchive: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTapeArchive",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTapeArchiveInput
  },
  output: {
    shape: DeleteTapeArchiveOutput
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
