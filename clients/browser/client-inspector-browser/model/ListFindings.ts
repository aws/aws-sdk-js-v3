import { ListFindingsInput } from "./ListFindingsInput";
import { ListFindingsOutput } from "./ListFindingsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
