import { AdminInitiateAuthInput } from "./AdminInitiateAuthInput";
import { AdminInitiateAuthOutput } from "./AdminInitiateAuthOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { MFAMethodNotFoundException } from "./MFAMethodNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminInitiateAuth: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminInitiateAuth",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminInitiateAuthInput
  },
  output: {
    shape: AdminInitiateAuthOutput
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
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: UnexpectedLambdaException
    },
    {
      shape: InvalidUserPoolConfigurationException
    },
    {
      shape: UserLambdaValidationException
    },
    {
      shape: InvalidLambdaResponseException
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
      shape: PasswordResetRequiredException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: UserNotConfirmedException
    }
  ]
};
