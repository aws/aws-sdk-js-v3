import { DeleteApplicationCloudWatchLoggingOptionInput } from "../shapes/DeleteApplicationCloudWatchLoggingOptionInput";
import { DeleteApplicationCloudWatchLoggingOptionOutput } from "../shapes/DeleteApplicationCloudWatchLoggingOptionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
      shape: UnsupportedOperationException
    }
  ]
};
