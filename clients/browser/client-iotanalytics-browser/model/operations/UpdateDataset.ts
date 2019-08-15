import { UpdateDatasetInput } from "../shapes/UpdateDatasetInput";
import { UpdateDatasetOutput } from "../shapes/UpdateDatasetOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDataset",
  http: {
    method: "PUT",
    requestUri: "/datasets/{datasetName}"
  },
  input: {
    shape: UpdateDatasetInput
  },
  output: {
    shape: UpdateDatasetOutput
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
