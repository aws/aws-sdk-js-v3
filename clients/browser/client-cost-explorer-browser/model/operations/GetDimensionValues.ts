import { GetDimensionValuesInput } from "../shapes/GetDimensionValuesInput";
import { GetDimensionValuesOutput } from "../shapes/GetDimensionValuesOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BillExpirationException } from "../shapes/BillExpirationException";
import { DataUnavailableException } from "../shapes/DataUnavailableException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { RequestChangedException } from "../shapes/RequestChangedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDimensionValues: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDimensionValues",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDimensionValuesInput
  },
  output: {
    shape: GetDimensionValuesOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: BillExpirationException
    },
    {
      shape: DataUnavailableException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: RequestChangedException
    }
  ]
};
