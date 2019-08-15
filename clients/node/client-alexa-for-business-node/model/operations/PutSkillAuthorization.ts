import { PutSkillAuthorizationInput } from "../shapes/PutSkillAuthorizationInput";
import { PutSkillAuthorizationOutput } from "../shapes/PutSkillAuthorizationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
