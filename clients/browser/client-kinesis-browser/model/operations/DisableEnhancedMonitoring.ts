import { DisableEnhancedMonitoringInput } from "../shapes/DisableEnhancedMonitoringInput";
import { DisableEnhancedMonitoringOutput } from "../shapes/DisableEnhancedMonitoringOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableEnhancedMonitoring: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableEnhancedMonitoring",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableEnhancedMonitoringInput
  },
  output: {
    shape: DisableEnhancedMonitoringOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
