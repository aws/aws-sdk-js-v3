import { DescribeTapeRecoveryPointsInput } from "./DescribeTapeRecoveryPointsInput";
import { DescribeTapeRecoveryPointsOutput } from "./DescribeTapeRecoveryPointsOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
