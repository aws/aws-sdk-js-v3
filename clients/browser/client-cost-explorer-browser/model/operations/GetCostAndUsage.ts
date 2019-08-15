import { GetCostAndUsageInput } from "../shapes/GetCostAndUsageInput";
import { GetCostAndUsageOutput } from "../shapes/GetCostAndUsageOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BillExpirationException } from "../shapes/BillExpirationException";
import { DataUnavailableException } from "../shapes/DataUnavailableException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { RequestChangedException } from "../shapes/RequestChangedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCostAndUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCostAndUsage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCostAndUsageInput
  },
  output: {
    shape: GetCostAndUsageOutput
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
