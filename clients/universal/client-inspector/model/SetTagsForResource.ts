import { SetTagsForResourceInput } from "./SetTagsForResourceInput";
import { SetTagsForResourceOutput } from "./SetTagsForResourceOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetTagsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetTagsForResourceInput
  },
  output: {
    shape: SetTagsForResourceOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
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
