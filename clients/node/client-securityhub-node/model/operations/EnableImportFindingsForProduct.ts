import { EnableImportFindingsForProductInput } from "../shapes/EnableImportFindingsForProductInput";
import { EnableImportFindingsForProductOutput } from "../shapes/EnableImportFindingsForProductOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
