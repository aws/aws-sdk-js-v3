import { AddApplicationInputProcessingConfigurationInput } from "../shapes/AddApplicationInputProcessingConfigurationInput";
import { AddApplicationInputProcessingConfigurationOutput } from "../shapes/AddApplicationInputProcessingConfigurationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddApplicationInputProcessingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddApplicationInputProcessingConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddApplicationInputProcessingConfigurationInput
  },
  output: {
    shape: AddApplicationInputProcessingConfigurationOutput
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
