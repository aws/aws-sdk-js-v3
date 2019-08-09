import { EnableImportFindingsForProductInput } from "./EnableImportFindingsForProductInput";
import { EnableImportFindingsForProductOutput } from "./EnableImportFindingsForProductOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceConflictException } from "./ResourceConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableImportFindingsForProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableImportFindingsForProduct",
  http: {
    method: "POST",
    requestUri: "/productSubscriptions"
  },
  input: {
    shape: EnableImportFindingsForProductInput
  },
  output: {
    shape: EnableImportFindingsForProductOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: LimitExceededException
    }
  ]
};
