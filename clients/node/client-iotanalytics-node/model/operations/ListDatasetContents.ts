import { ListDatasetContentsInput } from "../shapes/ListDatasetContentsInput";
import { ListDatasetContentsOutput } from "../shapes/ListDatasetContentsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDatasetContents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDatasetContents",
  http: {
    method: "GET",
    requestUri: "/datasets/{datasetName}/contents"
  },
  input: {
    shape: ListDatasetContentsInput
  },
  output: {
    shape: ListDatasetContentsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
