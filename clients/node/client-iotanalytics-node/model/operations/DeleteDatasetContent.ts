import { DeleteDatasetContentInput } from "../shapes/DeleteDatasetContentInput";
import { DeleteDatasetContentOutput } from "../shapes/DeleteDatasetContentOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDatasetContent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDatasetContent",
  http: {
    method: "DELETE",
    requestUri: "/datasets/{datasetName}/content"
  },
  input: {
    shape: DeleteDatasetContentInput
  },
  output: {
    shape: DeleteDatasetContentOutput
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
