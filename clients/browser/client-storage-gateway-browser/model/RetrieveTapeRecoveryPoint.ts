import { RetrieveTapeRecoveryPointInput } from "./RetrieveTapeRecoveryPointInput";
import { RetrieveTapeRecoveryPointOutput } from "./RetrieveTapeRecoveryPointOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
