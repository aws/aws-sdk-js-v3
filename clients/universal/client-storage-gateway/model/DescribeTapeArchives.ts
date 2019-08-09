import { DescribeTapeArchivesInput } from "./DescribeTapeArchivesInput";
import { DescribeTapeArchivesOutput } from "./DescribeTapeArchivesOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTapeArchives: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTapeArchives",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTapeArchivesInput
  },
  output: {
    shape: DescribeTapeArchivesOutput
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
