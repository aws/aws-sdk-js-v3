import { BatchImportFindingsInput } from "./BatchImportFindingsInput";
import { BatchImportFindingsOutput } from "./BatchImportFindingsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
