import { RetrieveTapeRecoveryPointInput } from "../shapes/RetrieveTapeRecoveryPointInput";
import { RetrieveTapeRecoveryPointOutput } from "../shapes/RetrieveTapeRecoveryPointOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RetrieveTapeRecoveryPoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RetrieveTapeRecoveryPoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RetrieveTapeRecoveryPointInput
  },
  output: {
    shape: RetrieveTapeRecoveryPointOutput
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
