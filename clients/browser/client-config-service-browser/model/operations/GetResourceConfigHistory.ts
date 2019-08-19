import { GetResourceConfigHistoryInput } from "../shapes/GetResourceConfigHistoryInput";
import { GetResourceConfigHistoryOutput } from "../shapes/GetResourceConfigHistoryOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidTimeRangeException } from "../shapes/InvalidTimeRangeException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { NoAvailableConfigurationRecorderException } from "../shapes/NoAvailableConfigurationRecorderException";
import { ResourceNotDiscoveredException } from "../shapes/ResourceNotDiscoveredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
