import { PutSkillAuthorizationInput } from "./PutSkillAuthorizationInput";
import { PutSkillAuthorizationOutput } from "./PutSkillAuthorizationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutSkillAuthorization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutSkillAuthorization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutSkillAuthorizationInput
  },
  output: {
    shape: PutSkillAuthorizationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
