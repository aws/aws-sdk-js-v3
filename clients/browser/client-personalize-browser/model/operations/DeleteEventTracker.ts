import { DeleteEventTrackerInput } from "../shapes/DeleteEventTrackerInput";
import { DeleteEventTrackerOutput } from "../shapes/DeleteEventTrackerOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEventTracker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEventTracker",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEventTrackerInput
  },
  output: {
    shape: DeleteEventTrackerOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
