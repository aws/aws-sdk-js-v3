import { CreateGroupMembershipInput } from "../shapes/CreateGroupMembershipInput";
import { CreateGroupMembershipOutput } from "../shapes/CreateGroupMembershipOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { PreconditionNotMetException } from "../shapes/PreconditionNotMetException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGroupMembership: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGroupMembership",
  http: {
    method: "PUT",
    requestUri:
      "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}"
  },
  input: {
    shape: CreateGroupMembershipInput
  },
  output: {
    shape: CreateGroupMembershipOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: PreconditionNotMetException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceUnavailableException
    }
  ]
};
