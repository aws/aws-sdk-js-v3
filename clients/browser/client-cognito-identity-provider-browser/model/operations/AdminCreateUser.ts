import { AdminCreateUserInput } from "../shapes/AdminCreateUserInput";
import { AdminCreateUserOutput } from "../shapes/AdminCreateUserOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UsernameExistsException } from "../shapes/UsernameExistsException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { CodeDeliveryFailureException } from "../shapes/CodeDeliveryFailureException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { PreconditionNotMetException } from "../shapes/PreconditionNotMetException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UnsupportedUserStateException } from "../shapes/UnsupportedUserStateException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminCreateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminCreateUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminCreateUserInput
  },
  output: {
    shape: AdminCreateUserOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: UsernameExistsException
    },
    {
      shape: InvalidPasswordException
    },
    {
      shape: CodeDeliveryFailureException
    },
    {
      shape: UnexpectedLambdaException
    },
    {
      shape: UserLambdaValidationException
    },
    {
      shape: InvalidLambdaResponseException
    },
    {
      shape: PreconditionNotMetException
    },
    {
      shape: InvalidSmsRoleAccessPolicyException
    },
    {
      shape: InvalidSmsRoleTrustRelationshipException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UnsupportedUserStateException
    },
    {
      shape: InternalErrorException
    }
  ]
};
