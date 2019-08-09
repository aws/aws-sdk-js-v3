import { SetUserPoolMfaConfigInput } from "./SetUserPoolMfaConfigInput";
import { SetUserPoolMfaConfigOutput } from "./SetUserPoolMfaConfigOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
