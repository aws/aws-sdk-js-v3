import { DisableEnhancedMonitoringInput } from "./DisableEnhancedMonitoringInput";
import { DisableEnhancedMonitoringOutput } from "./DisableEnhancedMonitoringOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
