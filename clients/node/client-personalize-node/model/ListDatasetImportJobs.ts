import { ListDatasetImportJobsInput } from "./ListDatasetImportJobsInput";
import { ListDatasetImportJobsOutput } from "./ListDatasetImportJobsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
