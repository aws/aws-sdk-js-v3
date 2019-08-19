import { UpdateDetectorModelInput } from "../shapes/UpdateDetectorModelInput";
import { UpdateDetectorModelOutput } from "../shapes/UpdateDetectorModelOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDetectorModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDetectorModel",
  http: {
    method: "POST",
    requestUri: "/detector-models/{detectorModelName}"
  },
  input: {
    shape: UpdateDetectorModelInput
  },
  output: {
    shape: UpdateDetectorModelOutput
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
