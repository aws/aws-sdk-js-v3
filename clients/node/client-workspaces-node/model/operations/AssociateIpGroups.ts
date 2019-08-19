import { AssociateIpGroupsInput } from "../shapes/AssociateIpGroupsInput";
import { AssociateIpGroupsOutput } from "../shapes/AssociateIpGroupsOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
