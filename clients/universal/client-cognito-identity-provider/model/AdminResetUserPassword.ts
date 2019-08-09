import { AdminResetUserPasswordInput } from "./AdminResetUserPasswordInput";
import { AdminResetUserPasswordOutput } from "./AdminResetUserPasswordOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
