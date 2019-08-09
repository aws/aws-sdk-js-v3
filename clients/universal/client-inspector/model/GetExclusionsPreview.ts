import { GetExclusionsPreviewInput } from "./GetExclusionsPreviewInput";
import { GetExclusionsPreviewOutput } from "./GetExclusionsPreviewOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalException } from "./InternalException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetExclusionsPreview: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetExclusionsPreview",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetExclusionsPreviewInput
  },
  output: {
    shape: GetExclusionsPreviewOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchEntityException
    }
  ]
};
