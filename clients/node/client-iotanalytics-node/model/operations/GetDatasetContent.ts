import { GetDatasetContentInput } from "../shapes/GetDatasetContentInput";
import { GetDatasetContentOutput } from "../shapes/GetDatasetContentOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
