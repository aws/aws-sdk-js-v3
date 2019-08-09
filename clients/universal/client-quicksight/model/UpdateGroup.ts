import { UpdateGroupInput } from "./UpdateGroupInput";
import { UpdateGroupOutput } from "./UpdateGroupOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGroup",
  http: {
    method: "PUT",
    requestUri:
      "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}"
  },
  input: {
    shape: UpdateGroupInput
  },
  output: {
    shape: UpdateGroupOutput
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
