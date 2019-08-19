import { RevokeIpRulesInput } from "../shapes/RevokeIpRulesInput";
import { RevokeIpRulesOutput } from "../shapes/RevokeIpRulesOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RevokeIpRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeIpRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeIpRulesInput
  },
  output: {
    shape: RevokeIpRulesOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidResourceStateException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
