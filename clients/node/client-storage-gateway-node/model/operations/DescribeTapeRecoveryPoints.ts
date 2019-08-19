import { DescribeTapeRecoveryPointsInput } from "../shapes/DescribeTapeRecoveryPointsInput";
import { DescribeTapeRecoveryPointsOutput } from "../shapes/DescribeTapeRecoveryPointsOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTapeRecoveryPoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTapeRecoveryPoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTapeRecoveryPointsInput
  },
  output: {
    shape: DescribeTapeRecoveryPointsOutput
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
