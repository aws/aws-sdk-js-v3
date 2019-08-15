import { AdminResetUserPasswordInput } from "../shapes/AdminResetUserPasswordInput";
import { AdminResetUserPasswordOutput } from "../shapes/AdminResetUserPasswordOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidEmailRoleAccessPolicyException } from "../shapes/InvalidEmailRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminResetUserPassword: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminResetUserPassword",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminResetUserPasswordInput
  },
  output: {
    shape: AdminResetUserPasswordOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: UnexpectedLambdaException
    },
    {
      shape: UserLambdaValidationException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidLambdaResponseException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: InvalidSmsRoleAccessPolicyException
    },
    {
      shape: InvalidEmailRoleAccessPolicyException
    },
    {
      shape: InvalidSmsRoleTrustRelationshipException
    },
    {
      shape: InternalErrorException
    }
  ]
};
