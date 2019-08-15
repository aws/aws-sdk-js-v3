import { DeleteDatasetInput } from "../shapes/DeleteDatasetInput";
import { DeleteDatasetOutput } from "../shapes/DeleteDatasetOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
