import { RetrieveTapeArchiveInput } from "../shapes/RetrieveTapeArchiveInput";
import { RetrieveTapeArchiveOutput } from "../shapes/RetrieveTapeArchiveOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
