import { AssociateIpGroupsInput } from "./AssociateIpGroupsInput";
import { AssociateIpGroupsOutput } from "./AssociateIpGroupsOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateIpGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateIpGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateIpGroupsInput
  },
  output: {
    shape: AssociateIpGroupsOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InvalidResourceStateException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: OperationNotSupportedException
    }
  ]
};
