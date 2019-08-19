import { StartApplicationInput } from "../shapes/StartApplicationInput";
import { StartApplicationOutput } from "../shapes/StartApplicationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { InvalidApplicationConfigurationException } from "../shapes/InvalidApplicationConfigurationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartApplicationInput
  },
  output: {
    shape: StartApplicationOutput
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
      shape: InvalidApplicationConfigurationException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
