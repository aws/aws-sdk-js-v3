import { CopyWorkspaceImageInput } from "../shapes/CopyWorkspaceImageInput";
import { CopyWorkspaceImageOutput } from "../shapes/CopyWorkspaceImageOutput";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyWorkspaceImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyWorkspaceImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyWorkspaceImageInput
  },
  output: {
    shape: CopyWorkspaceImageOutput
  },
  errors: [
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceUnavailableException
    },
    {
      shape: OperationNotSupportedException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidParameterValuesException
    }
  ]
};
