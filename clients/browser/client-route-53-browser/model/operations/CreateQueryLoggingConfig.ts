import { CreateQueryLoggingConfigInput } from "../shapes/CreateQueryLoggingConfigInput";
import { CreateQueryLoggingConfigOutput } from "../shapes/CreateQueryLoggingConfigOutput";
import { ConcurrentModification } from "../shapes/ConcurrentModification";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { NoSuchCloudWatchLogsLogGroup } from "../shapes/NoSuchCloudWatchLogsLogGroup";
import { InvalidInput } from "../shapes/InvalidInput";
import { QueryLoggingConfigAlreadyExists } from "../shapes/QueryLoggingConfigAlreadyExists";
import { InsufficientCloudWatchLogsResourcePolicy } from "../shapes/InsufficientCloudWatchLogsResourcePolicy";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateQueryLoggingConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateQueryLoggingConfig",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/queryloggingconfig"
  },
  input: {
    shape: CreateQueryLoggingConfigInput,
    locationName: "CreateQueryLoggingConfigRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: CreateQueryLoggingConfigOutput
  },
  errors: [
    {
      shape: ConcurrentModification
    },
    {
      shape: NoSuchHostedZone
    },
    {
      shape: NoSuchCloudWatchLogsLogGroup
    },
    {
      shape: InvalidInput
    },
    {
      shape: QueryLoggingConfigAlreadyExists
    },
    {
      shape: InsufficientCloudWatchLogsResourcePolicy
    }
  ]
};
