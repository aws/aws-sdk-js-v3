import { CreateUserPoolInput } from "./CreateUserPoolInput";
import { CreateUserPoolOutput } from "./CreateUserPoolOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserPoolTaggingException } from "./UserPoolTaggingException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
