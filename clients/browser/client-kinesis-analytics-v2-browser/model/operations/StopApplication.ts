import { StopApplicationInput } from "../shapes/StopApplicationInput";
import { StopApplicationOutput } from "../shapes/StopApplicationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidApplicationConfigurationException } from "../shapes/InvalidApplicationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopApplicationInput
  },
  output: {
    shape: StopApplicationOutput
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
      shape: InvalidRequestException
    },
    {
      shape: InvalidApplicationConfigurationException
    }
  ]
};
