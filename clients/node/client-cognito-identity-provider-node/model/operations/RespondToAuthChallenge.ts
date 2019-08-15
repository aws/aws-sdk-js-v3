import { RespondToAuthChallengeInput } from "../shapes/RespondToAuthChallengeInput";
import { RespondToAuthChallengeOutput } from "../shapes/RespondToAuthChallengeOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { CodeMismatchException } from "../shapes/CodeMismatchException";
import { ExpiredCodeException } from "../shapes/ExpiredCodeException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidUserPoolConfigurationException } from "../shapes/InvalidUserPoolConfigurationException";
import { MFAMethodNotFoundException } from "../shapes/MFAMethodNotFoundException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { AliasExistsException } from "../shapes/AliasExistsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { SoftwareTokenMFANotFoundException } from "../shapes/SoftwareTokenMFANotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RespondToAuthChallenge: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RespondToAuthChallenge",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RespondToAuthChallengeInput
  },
  output: {
    shape: RespondToAuthChallengeOutput
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
      shape: UserLambdaValidationException
    },
    {
      shape: InvalidPasswordException
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
      shape: MFAMethodNotFoundException
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
      shape: InvalidSmsRoleAccessPolicyException
    },
    {
      shape: InvalidSmsRoleTrustRelationshipException
    },
    {
      shape: AliasExistsException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: SoftwareTokenMFANotFoundException
    }
  ]
};
