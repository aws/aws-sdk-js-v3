import { AddAttributesToFindingsInput } from "../shapes/AddAttributesToFindingsInput";
import { AddAttributesToFindingsOutput } from "../shapes/AddAttributesToFindingsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
