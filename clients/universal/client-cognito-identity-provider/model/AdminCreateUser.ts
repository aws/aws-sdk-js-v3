import { AdminCreateUserInput } from "./AdminCreateUserInput";
import { AdminCreateUserOutput } from "./AdminCreateUserOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UsernameExistsException } from "./UsernameExistsException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { CodeDeliveryFailureException } from "./CodeDeliveryFailureException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UnsupportedUserStateException } from "./UnsupportedUserStateException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
