import { GetReservationUtilizationInput } from "../shapes/GetReservationUtilizationInput";
import { GetReservationUtilizationOutput } from "../shapes/GetReservationUtilizationOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DataUnavailableException } from "../shapes/DataUnavailableException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
