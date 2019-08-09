import { ListDatasetContentsInput } from "./ListDatasetContentsInput";
import { ListDatasetContentsOutput } from "./ListDatasetContentsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
