import { AddAttributesToFindingsInput } from "./AddAttributesToFindingsInput";
import { AddAttributesToFindingsOutput } from "./AddAttributesToFindingsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddAttributesToFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddAttributesToFindings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddAttributesToFindingsInput
  },
  output: {
    shape: AddAttributesToFindingsOutput
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
