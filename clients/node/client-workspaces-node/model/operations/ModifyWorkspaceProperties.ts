import { ModifyWorkspacePropertiesInput } from "../shapes/ModifyWorkspacePropertiesInput";
import { ModifyWorkspacePropertiesOutput } from "../shapes/ModifyWorkspacePropertiesOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { UnsupportedWorkspaceConfigurationException } from "../shapes/UnsupportedWorkspaceConfigurationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
