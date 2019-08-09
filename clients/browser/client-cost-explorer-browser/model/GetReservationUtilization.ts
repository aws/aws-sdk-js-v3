import { GetReservationUtilizationInput } from "./GetReservationUtilizationInput";
import { GetReservationUtilizationOutput } from "./GetReservationUtilizationOutput";
import { LimitExceededException } from "./LimitExceededException";
import { DataUnavailableException } from "./DataUnavailableException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetReservationUtilization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetReservationUtilization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetReservationUtilizationInput
  },
  output: {
    shape: GetReservationUtilizationOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: DataUnavailableException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
