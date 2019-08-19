import { CreateDatasetContentInput } from "../shapes/CreateDatasetContentInput";
import { CreateDatasetContentOutput } from "../shapes/CreateDatasetContentOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
