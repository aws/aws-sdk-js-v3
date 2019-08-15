import { DescribeTapeArchivesInput } from "../shapes/DescribeTapeArchivesInput";
import { DescribeTapeArchivesOutput } from "../shapes/DescribeTapeArchivesOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
