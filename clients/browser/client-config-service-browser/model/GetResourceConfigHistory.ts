import { GetResourceConfigHistoryInput } from "./GetResourceConfigHistoryInput";
import { GetResourceConfigHistoryOutput } from "./GetResourceConfigHistoryOutput";
import { ValidationException } from "./ValidationException";
import { InvalidTimeRangeException } from "./InvalidTimeRangeException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
import { ResourceNotDiscoveredException } from "./ResourceNotDiscoveredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetResourceConfigHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResourceConfigHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetResourceConfigHistoryInput
  },
  output: {
    shape: GetResourceConfigHistoryOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidTimeRangeException
    },
    {
      shape: InvalidLimitException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: NoAvailableConfigurationRecorderException
    },
    {
      shape: ResourceNotDiscoveredException
    }
  ]
};
