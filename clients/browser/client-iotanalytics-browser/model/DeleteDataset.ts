import { DeleteDatasetInput } from "./DeleteDatasetInput";
import { DeleteDatasetOutput } from "./DeleteDatasetOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDataset",
  http: {
    method: "DELETE",
    requestUri: "/datasets/{datasetName}"
  },
  input: {
    shape: DeleteDatasetInput
  },
  output: {
    shape: DeleteDatasetOutput
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
