import { ListDatasetImportJobsInput } from "../shapes/ListDatasetImportJobsInput";
import { ListDatasetImportJobsOutput } from "../shapes/ListDatasetImportJobsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDatasetImportJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDatasetImportJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDatasetImportJobsInput
  },
  output: {
    shape: ListDatasetImportJobsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
