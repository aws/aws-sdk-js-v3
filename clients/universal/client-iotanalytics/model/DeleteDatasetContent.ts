import { DeleteDatasetContentInput } from "./DeleteDatasetContentInput";
import { DeleteDatasetContentOutput } from "./DeleteDatasetContentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
