import { DeleteDetectorModelInput } from "./DeleteDetectorModelInput";
import { DeleteDetectorModelOutput } from "./DeleteDetectorModelOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDetectorModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDetectorModel",
  http: {
    method: "DELETE",
    requestUri: "/detector-models/{detectorModelName}"
  },
  input: {
    shape: DeleteDetectorModelInput
  },
  output: {
    shape: DeleteDetectorModelOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
