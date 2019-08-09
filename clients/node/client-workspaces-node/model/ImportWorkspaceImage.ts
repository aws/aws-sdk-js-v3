import { ImportWorkspaceImageInput } from "./ImportWorkspaceImageInput";
import { ImportWorkspaceImageOutput } from "./ImportWorkspaceImageOutput";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ImportWorkspaceImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportWorkspaceImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportWorkspaceImageInput
  },
  output: {
    shape: ImportWorkspaceImageOutput
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
