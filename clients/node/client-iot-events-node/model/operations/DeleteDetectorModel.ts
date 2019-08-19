import { DeleteDetectorModelInput } from "../shapes/DeleteDetectorModelInput";
import { DeleteDetectorModelOutput } from "../shapes/DeleteDetectorModelOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
