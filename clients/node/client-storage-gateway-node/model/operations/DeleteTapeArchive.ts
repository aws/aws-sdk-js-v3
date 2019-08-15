import { DeleteTapeArchiveInput } from "../shapes/DeleteTapeArchiveInput";
import { DeleteTapeArchiveOutput } from "../shapes/DeleteTapeArchiveOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
