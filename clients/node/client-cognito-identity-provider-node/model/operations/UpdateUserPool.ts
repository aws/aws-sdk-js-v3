import { UpdateUserPoolInput } from "../shapes/UpdateUserPoolInput";
import { UpdateUserPoolOutput } from "../shapes/UpdateUserPoolOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserImportInProgressException } from "../shapes/UserImportInProgressException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidSmsRoleAccessPolicyException } from "../shapes/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "../shapes/InvalidSmsRoleTrustRelationshipException";
import { UserPoolTaggingException } from "../shapes/UserPoolTaggingException";
import { InvalidEmailRoleAccessPolicyException } from "../shapes/InvalidEmailRoleAccessPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserPool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateUserPoolInput
  },
  output: {
    shape: UpdateUserPoolOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserImportInProgressException
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
      shape: UserPoolTaggingException
    },
    {
      shape: InvalidEmailRoleAccessPolicyException
    }
  ]
};
