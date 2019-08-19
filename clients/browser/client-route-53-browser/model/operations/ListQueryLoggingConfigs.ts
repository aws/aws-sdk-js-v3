import { ListQueryLoggingConfigsInput } from "../shapes/ListQueryLoggingConfigsInput";
import { ListQueryLoggingConfigsOutput } from "../shapes/ListQueryLoggingConfigsOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { InvalidPaginationToken } from "../shapes/InvalidPaginationToken";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListQueryLoggingConfigs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListQueryLoggingConfigs",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/queryloggingconfig"
  },
  input: {
    shape: ListQueryLoggingConfigsInput
  },
  output: {
    shape: ListQueryLoggingConfigsOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: InvalidPaginationToken
    },
    {
      shape: NoSuchHostedZone
    }
  ]
};
