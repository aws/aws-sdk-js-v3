import { ModifyWorkspacePropertiesInput } from "./ModifyWorkspacePropertiesInput";
import { ModifyWorkspacePropertiesOutput } from "./ModifyWorkspacePropertiesOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { OperationInProgressException } from "./OperationInProgressException";
import { UnsupportedWorkspaceConfigurationException } from "./UnsupportedWorkspaceConfigurationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyWorkspaceProperties: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyWorkspaceProperties",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyWorkspacePropertiesInput
  },
  output: {
    shape: ModifyWorkspacePropertiesOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: InvalidResourceStateException
    },
    {
      shape: OperationInProgressException
    },
    {
      shape: UnsupportedWorkspaceConfigurationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ResourceUnavailableException
    }
  ]
};
