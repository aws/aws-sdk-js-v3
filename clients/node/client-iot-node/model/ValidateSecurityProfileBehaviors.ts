import { ValidateSecurityProfileBehaviorsInput } from "./ValidateSecurityProfileBehaviorsInput";
import { ValidateSecurityProfileBehaviorsOutput } from "./ValidateSecurityProfileBehaviorsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ValidateSecurityProfileBehaviors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ValidateSecurityProfileBehaviors",
  http: {
    method: "POST",
    requestUri: "/security-profile-behaviors/validate"
  },
  input: {
    shape: ValidateSecurityProfileBehaviorsInput
  },
  output: {
    shape: ValidateSecurityProfileBehaviorsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
