import { CreateExclusionsPreviewInput } from "./CreateExclusionsPreviewInput";
import { CreateExclusionsPreviewOutput } from "./CreateExclusionsPreviewOutput";
import { InvalidInputException } from "./InvalidInputException";
import { PreviewGenerationInProgressException } from "./PreviewGenerationInProgressException";
import { InternalException } from "./InternalException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateExclusionsPreview: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateExclusionsPreview",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateExclusionsPreviewInput
  },
  output: {
    shape: CreateExclusionsPreviewOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: PreviewGenerationInProgressException
    },
    {
      shape: InternalException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
