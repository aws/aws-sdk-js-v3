import { SetTagsForResourceInput } from "../shapes/SetTagsForResourceInput";
import { SetTagsForResourceOutput } from "../shapes/SetTagsForResourceOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
