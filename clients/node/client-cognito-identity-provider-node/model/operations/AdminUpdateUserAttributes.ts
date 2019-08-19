import { AdminUpdateUserAttributesInput } from "../shapes/AdminUpdateUserAttributesInput";
import { AdminUpdateUserAttributesOutput } from "../shapes/AdminUpdateUserAttributesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { AliasExistsException } from "../shapes/AliasExistsException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidEmailRoleAccessPolicyException } from "../shapes/InvalidEmailRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminUpdateUserAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminUpdateUserAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminUpdateUserAttributesInput
  },
  output: {
    shape: AdminUpdateUserAttributesOutput
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
      shape: InvalidLambdaResponseException
    },
    {
      shape: AliasExistsException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidSmsRoleAccessPolicyException
    },
    {
      shape: InvalidEmailRoleAccessPolicyException
    },
    {
      shape: InvalidSmsRoleTrustRelationshipException
    }
  ]
};
