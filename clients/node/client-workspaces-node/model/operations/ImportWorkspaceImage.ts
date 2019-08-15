import { ImportWorkspaceImageInput } from "../shapes/ImportWorkspaceImageInput";
import { ImportWorkspaceImageOutput } from "../shapes/ImportWorkspaceImageOutput";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
