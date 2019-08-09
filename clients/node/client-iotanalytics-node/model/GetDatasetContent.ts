import { GetDatasetContentInput } from "./GetDatasetContentInput";
import { GetDatasetContentOutput } from "./GetDatasetContentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDatasetContent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDatasetContent",
  http: {
    method: "GET",
    requestUri: "/datasets/{datasetName}/content"
  },
  input: {
    shape: GetDatasetContentInput
  },
  output: {
    shape: GetDatasetContentOutput
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
