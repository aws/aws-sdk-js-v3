import { CreateExclusionsPreviewInput } from "../shapes/CreateExclusionsPreviewInput";
import { CreateExclusionsPreviewOutput } from "../shapes/CreateExclusionsPreviewOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PreviewGenerationInProgressException } from "../shapes/PreviewGenerationInProgressException";
import { InternalException } from "../shapes/InternalException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
