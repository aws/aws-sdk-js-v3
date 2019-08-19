import { GetReservationCoverageInput } from "../shapes/GetReservationCoverageInput";
import { GetReservationCoverageOutput } from "../shapes/GetReservationCoverageOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DataUnavailableException } from "../shapes/DataUnavailableException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetReservationCoverage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetReservationCoverage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetReservationCoverageInput
  },
  output: {
    shape: GetReservationCoverageOutput
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
