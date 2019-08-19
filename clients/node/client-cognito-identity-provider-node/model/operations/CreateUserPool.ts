import { CreateUserPoolInput } from "../shapes/CreateUserPoolInput";
import { CreateUserPoolOutput } from "../shapes/CreateUserPoolOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { InvalidEmailRoleAccessPolicyException } from "../shapes/InvalidEmailRoleAccessPolicyException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserPoolTaggingException } from "../shapes/UserPoolTaggingException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateUserPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUserPool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUserPoolInput
  },
  output: {
    shape: CreateUserPoolOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
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
      shape: NotAuthorizedException
    },
    {
      shape: UserPoolTaggingException
    },
    {
      shape: InternalErrorException
    }
  ]
};
