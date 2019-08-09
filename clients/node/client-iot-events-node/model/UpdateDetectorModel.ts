import { UpdateDetectorModelInput } from "./UpdateDetectorModelInput";
import { UpdateDetectorModelOutput } from "./UpdateDetectorModelOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
