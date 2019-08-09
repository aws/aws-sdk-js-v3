import { AdminRespondToAuthChallengeInput } from "./AdminRespondToAuthChallengeInput";
import { AdminRespondToAuthChallengeOutput } from "./AdminRespondToAuthChallengeOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { CodeMismatchException } from "./CodeMismatchException";
import { ExpiredCodeException } from "./ExpiredCodeException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { InternalErrorException } from "./InternalErrorException";
import { MFAMethodNotFoundException } from "./MFAMethodNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { AliasExistsException } from "./AliasExistsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { SoftwareTokenMFANotFoundException } from "./SoftwareTokenMFANotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
