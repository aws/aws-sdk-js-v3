import { DisassociateIpGroupsInput } from "./DisassociateIpGroupsInput";
import { DisassociateIpGroupsOutput } from "./DisassociateIpGroupsOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
