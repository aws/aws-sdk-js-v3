import { GetCostAndUsageInput } from "./GetCostAndUsageInput";
import { GetCostAndUsageOutput } from "./GetCostAndUsageOutput";
import { LimitExceededException } from "./LimitExceededException";
import { BillExpirationException } from "./BillExpirationException";
import { DataUnavailableException } from "./DataUnavailableException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { RequestChangedException } from "./RequestChangedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
