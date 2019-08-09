import { DeleteApplicationCloudWatchLoggingOptionInput } from "./DeleteApplicationCloudWatchLoggingOptionInput";
import { DeleteApplicationCloudWatchLoggingOptionOutput } from "./DeleteApplicationCloudWatchLoggingOptionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidApplicationConfigurationException } from "./InvalidApplicationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteApplicationCloudWatchLoggingOption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplicationCloudWatchLoggingOption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationCloudWatchLoggingOptionInput
  },
  output: {
    shape: DeleteApplicationCloudWatchLoggingOptionOutput
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
