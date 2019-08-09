import { StopApplicationInput } from "./StopApplicationInput";
import { StopApplicationOutput } from "./StopApplicationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidApplicationConfigurationException } from "./InvalidApplicationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
