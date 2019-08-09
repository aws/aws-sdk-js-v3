import { DeleteEventTrackerInput } from "./DeleteEventTrackerInput";
import { DeleteEventTrackerOutput } from "./DeleteEventTrackerOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
