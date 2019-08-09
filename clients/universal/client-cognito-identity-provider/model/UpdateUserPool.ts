import { UpdateUserPoolInput } from "./UpdateUserPoolInput";
import { UpdateUserPoolOutput } from "./UpdateUserPoolOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserImportInProgressException } from "./UserImportInProgressException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { UserPoolTaggingException } from "./UserPoolTaggingException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
