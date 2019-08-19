import { UpdateRulesOfIpGroupInput } from "../shapes/UpdateRulesOfIpGroupInput";
import { UpdateRulesOfIpGroupOutput } from "../shapes/UpdateRulesOfIpGroupOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
