import { AdminRespondToAuthChallengeInput } from "../shapes/AdminRespondToAuthChallengeInput";
import { AdminRespondToAuthChallengeOutput } from "../shapes/AdminRespondToAuthChallengeOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { CodeMismatchException } from "../shapes/CodeMismatchException";
import { ExpiredCodeException } from "../shapes/ExpiredCodeException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidUserPoolConfigurationException } from "../shapes/InvalidUserPoolConfigurationException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { MFAMethodNotFoundException } from "../shapes/MFAMethodNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { AliasExistsException } from "../shapes/AliasExistsException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { SoftwareTokenMFANotFoundException } from "../shapes/SoftwareTokenMFANotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminRespondToAuthChallenge: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminRespondToAuthChallenge",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminRespondToAuthChallengeInput
  },
  output: {
    shape: AdminRespondToAuthChallengeOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: CodeMismatchException
    },
    {
      shape: ExpiredCodeException
    },
    {
      shape: UnexpectedLambdaException
    },
    {
      shape: InvalidPasswordException
    },
    {
      shape: UserLambdaValidationException
    },
    {
      shape: InvalidLambdaResponseException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidUserPoolConfigurationException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: MFAMethodNotFoundException
    },
    {
      shape: InvalidSmsRoleAccessPolicyException
    },
    {
      shape: InvalidSmsRoleTrustRelationshipException
    },
    {
      shape: AliasExistsException
    },
    {
      shape: PasswordResetRequiredException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: UserNotConfirmedException
    },
    {
      shape: SoftwareTokenMFANotFoundException
    }
  ]
};
