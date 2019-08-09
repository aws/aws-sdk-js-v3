import { CreateDatasetContentInput } from "./CreateDatasetContentInput";
import { CreateDatasetContentOutput } from "./CreateDatasetContentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDatasetContent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDatasetContent",
  http: {
    method: "POST",
    requestUri: "/datasets/{datasetName}/content"
  },
  input: {
    shape: CreateDatasetContentInput
  },
  output: {
    shape: CreateDatasetContentOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};
