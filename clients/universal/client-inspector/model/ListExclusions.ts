import { ListExclusionsInput } from "./ListExclusionsInput";
import { ListExclusionsOutput } from "./ListExclusionsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListExclusions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListExclusions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListExclusionsInput
  },
  output: {
    shape: ListExclusionsOutput
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
    }
  ]
};
