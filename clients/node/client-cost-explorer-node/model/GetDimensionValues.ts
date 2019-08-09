import { GetDimensionValuesInput } from "./GetDimensionValuesInput";
import { GetDimensionValuesOutput } from "./GetDimensionValuesOutput";
import { LimitExceededException } from "./LimitExceededException";
import { BillExpirationException } from "./BillExpirationException";
import { DataUnavailableException } from "./DataUnavailableException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { RequestChangedException } from "./RequestChangedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
