import { UpdateTimeToLiveInput } from "../shapes/UpdateTimeToLiveInput";
import { UpdateTimeToLiveOutput } from "../shapes/UpdateTimeToLiveOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTimeToLive: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTimeToLive",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTimeToLiveInput
  },
  output: {
    shape: UpdateTimeToLiveOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
