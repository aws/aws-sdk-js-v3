import { GetReservationCoverageInput } from "./GetReservationCoverageInput";
import { GetReservationCoverageOutput } from "./GetReservationCoverageOutput";
import { LimitExceededException } from "./LimitExceededException";
import { DataUnavailableException } from "./DataUnavailableException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
