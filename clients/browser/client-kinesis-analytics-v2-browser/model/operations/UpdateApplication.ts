import { UpdateApplicationInput } from "../shapes/UpdateApplicationInput";
import { UpdateApplicationOutput } from "../shapes/UpdateApplicationOutput";
import { CodeValidationException } from "../shapes/CodeValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidApplicationConfigurationException } from "../shapes/InvalidApplicationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateApplicationInput
  },
  output: {
    shape: UpdateApplicationOutput
  },
  errors: [
    {
      shape: CodeValidationException
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
