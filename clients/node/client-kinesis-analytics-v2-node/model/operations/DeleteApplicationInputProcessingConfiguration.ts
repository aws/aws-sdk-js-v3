import { DeleteApplicationInputProcessingConfigurationInput } from "../shapes/DeleteApplicationInputProcessingConfigurationInput";
import { DeleteApplicationInputProcessingConfigurationOutput } from "../shapes/DeleteApplicationInputProcessingConfigurationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApplicationInputProcessingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplicationInputProcessingConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationInputProcessingConfigurationInput
  },
  output: {
    shape: DeleteApplicationInputProcessingConfigurationOutput
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
    }
  ]
};
