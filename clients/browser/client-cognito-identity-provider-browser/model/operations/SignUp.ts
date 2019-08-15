import { SignUpInput } from "../shapes/SignUpInput";
import { SignUpOutput } from "../shapes/SignUpOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { UsernameExistsException } from "../shapes/UsernameExistsException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { InvalidEmailRoleAccessPolicyException } from "../shapes/InvalidEmailRoleAccessPolicyException";
import { CodeDeliveryFailureException } from "../shapes/CodeDeliveryFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SignUp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SignUp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SignUpInput
  },
  output: {
    shape: SignUpOutput
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
      shape: InvalidPasswordException
    },
    {
      shape: InvalidLambdaResponseException
    },
    {
      shape: UsernameExistsException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
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
    }
  ]
};
