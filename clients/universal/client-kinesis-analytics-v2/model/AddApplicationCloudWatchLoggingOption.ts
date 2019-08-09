import { AddApplicationCloudWatchLoggingOptionInput } from "./AddApplicationCloudWatchLoggingOptionInput";
import { AddApplicationCloudWatchLoggingOptionOutput } from "./AddApplicationCloudWatchLoggingOptionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidApplicationConfigurationException } from "./InvalidApplicationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddApplicationCloudWatchLoggingOption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddApplicationCloudWatchLoggingOption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddApplicationCloudWatchLoggingOptionInput
  },
  output: {
    shape: AddApplicationCloudWatchLoggingOptionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidApplicationConfigurationException
    }
  ]
};
