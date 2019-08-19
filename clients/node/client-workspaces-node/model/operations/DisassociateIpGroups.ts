import { DisassociateIpGroupsInput } from "../shapes/DisassociateIpGroupsInput";
import { DisassociateIpGroupsOutput } from "../shapes/DisassociateIpGroupsOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateIpGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateIpGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateIpGroupsInput
  },
  output: {
    shape: DisassociateIpGroupsOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidResourceStateException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
