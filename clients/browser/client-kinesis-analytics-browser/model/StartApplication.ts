import { StartApplicationInput } from "./StartApplicationInput";
import { StartApplicationOutput } from "./StartApplicationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidApplicationConfigurationException } from "./InvalidApplicationConfigurationException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
      shape: UnsupportedOperationException
    }
  ]
};
