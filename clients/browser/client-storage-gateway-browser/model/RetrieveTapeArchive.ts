import { RetrieveTapeArchiveInput } from "./RetrieveTapeArchiveInput";
import { RetrieveTapeArchiveOutput } from "./RetrieveTapeArchiveOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RetrieveTapeArchive: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RetrieveTapeArchive",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RetrieveTapeArchiveInput
  },
  output: {
    shape: RetrieveTapeArchiveOutput
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
