import { BatchImportFindingsInput } from "../shapes/BatchImportFindingsInput";
import { BatchImportFindingsOutput } from "../shapes/BatchImportFindingsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchImportFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchImportFindings",
  http: {
    method: "POST",
    requestUri: "/findings/import"
  },
  input: {
    shape: BatchImportFindingsInput
  },
  output: {
    shape: BatchImportFindingsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccessException
    }
  ]
};
