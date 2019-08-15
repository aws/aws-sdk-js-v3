import { GetExclusionsPreviewInput } from "../shapes/GetExclusionsPreviewInput";
import { GetExclusionsPreviewOutput } from "../shapes/GetExclusionsPreviewOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalException } from "../shapes/InternalException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
