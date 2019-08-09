import { UpdateDatasetInput } from "./UpdateDatasetInput";
import { UpdateDatasetOutput } from "./UpdateDatasetOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
