import { AddApplicationCloudWatchLoggingOptionInput } from "../shapes/AddApplicationCloudWatchLoggingOptionInput";
import { AddApplicationCloudWatchLoggingOptionOutput } from "../shapes/AddApplicationCloudWatchLoggingOptionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
      shape: UnsupportedOperationException
    }
  ]
};
