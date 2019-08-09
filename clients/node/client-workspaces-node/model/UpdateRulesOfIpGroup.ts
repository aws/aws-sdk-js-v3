import { UpdateRulesOfIpGroupInput } from "./UpdateRulesOfIpGroupInput";
import { UpdateRulesOfIpGroupOutput } from "./UpdateRulesOfIpGroupOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateRulesOfIpGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRulesOfIpGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRulesOfIpGroupInput
  },
  output: {
    shape: UpdateRulesOfIpGroupOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InvalidResourceStateException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
