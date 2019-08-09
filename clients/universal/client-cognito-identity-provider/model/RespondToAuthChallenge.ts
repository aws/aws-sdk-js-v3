import { RespondToAuthChallengeInput } from "./RespondToAuthChallengeInput";
import { RespondToAuthChallengeOutput } from "./RespondToAuthChallengeOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { CodeMismatchException } from "./CodeMismatchException";
import { ExpiredCodeException } from "./ExpiredCodeException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { MFAMethodNotFoundException } from "./MFAMethodNotFoundException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { AliasExistsException } from "./AliasExistsException";
import { InternalErrorException } from "./InternalErrorException";
import { SoftwareTokenMFANotFoundException } from "./SoftwareTokenMFANotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
