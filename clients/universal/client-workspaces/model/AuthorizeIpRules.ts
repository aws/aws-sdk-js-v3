import { AuthorizeIpRulesInput } from "./AuthorizeIpRulesInput";
import { AuthorizeIpRulesOutput } from "./AuthorizeIpRulesOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
