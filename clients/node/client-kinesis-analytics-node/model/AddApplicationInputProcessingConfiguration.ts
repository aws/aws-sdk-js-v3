import { AddApplicationInputProcessingConfigurationInput } from "./AddApplicationInputProcessingConfigurationInput";
import { AddApplicationInputProcessingConfigurationOutput } from "./AddApplicationInputProcessingConfigurationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
