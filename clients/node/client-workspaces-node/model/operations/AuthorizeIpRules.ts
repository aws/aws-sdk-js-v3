import { AuthorizeIpRulesInput } from "../shapes/AuthorizeIpRulesInput";
import { AuthorizeIpRulesOutput } from "../shapes/AuthorizeIpRulesOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AuthorizeIpRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AuthorizeIpRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AuthorizeIpRulesInput
  },
  output: {
    shape: AuthorizeIpRulesOutput
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
