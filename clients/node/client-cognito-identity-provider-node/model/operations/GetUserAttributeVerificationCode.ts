import { GetUserAttributeVerificationCodeInput } from "../shapes/GetUserAttributeVerificationCodeInput";
import { GetUserAttributeVerificationCodeOutput } from "../shapes/GetUserAttributeVerificationCodeOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { InvalidEmailRoleAccessPolicyException } from "../shapes/InvalidEmailRoleAccessPolicyException";
import { CodeDeliveryFailureException } from "../shapes/CodeDeliveryFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUserAttributeVerificationCode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUserAttributeVerificationCode",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUserAttributeVerificationCodeInput
  },
  output: {
    shape: GetUserAttributeVerificationCodeOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
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
      shape: InvalidSmsRoleAccessPolicyException
    },
    {
      shape: InvalidSmsRoleTrustRelationshipException
    },
    {
      shape: InvalidEmailRoleAccessPolicyException
    },
    {
      shape: CodeDeliveryFailureException
    },
    {
      shape: LimitExceededException
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
      shape: InternalErrorException
    }
  ]
};
