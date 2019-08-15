import { ListFindingsInput } from "../shapes/ListFindingsInput";
import { ListFindingsOutput } from "../shapes/ListFindingsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFindings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListFindingsInput
  },
  output: {
    shape: ListFindingsOutput
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
