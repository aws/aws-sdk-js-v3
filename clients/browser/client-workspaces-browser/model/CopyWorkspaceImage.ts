import { CopyWorkspaceImageInput } from "./CopyWorkspaceImageInput";
import { CopyWorkspaceImageOutput } from "./CopyWorkspaceImageOutput";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
