import { ValidateSecurityProfileBehaviorsInput } from "../shapes/ValidateSecurityProfileBehaviorsInput";
import { ValidateSecurityProfileBehaviorsOutput } from "../shapes/ValidateSecurityProfileBehaviorsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
