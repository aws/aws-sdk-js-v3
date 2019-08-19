import { EnableEnhancedMonitoringInput } from "../shapes/EnableEnhancedMonitoringInput";
import { EnableEnhancedMonitoringOutput } from "../shapes/EnableEnhancedMonitoringOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableEnhancedMonitoring: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableEnhancedMonitoring",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableEnhancedMonitoringInput
  },
  output: {
    shape: EnableEnhancedMonitoringOutput
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
