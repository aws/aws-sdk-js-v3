import { DeleteApplicationInput } from "../shapes/DeleteApplicationInput";
import { DeleteApplicationOutput } from "../shapes/DeleteApplicationOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidApplicationConfigurationException } from "../shapes/InvalidApplicationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationInput
  },
  output: {
    shape: DeleteApplicationOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
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
      shape: InvalidRequestException
    },
    {
      shape: InvalidApplicationConfigurationException
    }
  ]
};
