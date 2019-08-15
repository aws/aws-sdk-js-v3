import { UpdateUserAttributesInput } from "../shapes/UpdateUserAttributesInput";
import { UpdateUserAttributesOutput } from "../shapes/UpdateUserAttributesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { CodeMismatchException } from "../shapes/CodeMismatchException";
import { ExpiredCodeException } from "../shapes/ExpiredCodeException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { AliasExistsException } from "../shapes/AliasExistsException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { InvalidEmailRoleAccessPolicyException } from "../shapes/InvalidEmailRoleAccessPolicyException";
import { CodeDeliveryFailureException } from "../shapes/CodeDeliveryFailureException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateUserAttributesInput
  },
  output: {
    shape: UpdateUserAttributesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: CodeMismatchException
    },
    {
      shape: ExpiredCodeException
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
      shape: TooManyRequestsException
    },
    {
      shape: AliasExistsException
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
