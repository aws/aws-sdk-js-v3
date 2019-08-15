import { SetUserPoolMfaConfigInput } from "../shapes/SetUserPoolMfaConfigInput";
import { SetUserPoolMfaConfigOutput } from "../shapes/SetUserPoolMfaConfigOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetUserPoolMfaConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetUserPoolMfaConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetUserPoolMfaConfigInput
  },
  output: {
    shape: SetUserPoolMfaConfigOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidSmsRoleAccessPolicyException
    },
    {
      shape: InvalidSmsRoleTrustRelationshipException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
