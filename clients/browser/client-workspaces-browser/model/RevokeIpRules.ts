import { RevokeIpRulesInput } from "./RevokeIpRulesInput";
import { RevokeIpRulesOutput } from "./RevokeIpRulesOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
