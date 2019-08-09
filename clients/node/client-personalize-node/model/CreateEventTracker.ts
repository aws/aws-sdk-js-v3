import { CreateEventTrackerInput } from "./CreateEventTrackerInput";
import { CreateEventTrackerOutput } from "./CreateEventTrackerOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateEventTracker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEventTracker",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEventTrackerInput
  },
  output: {
    shape: CreateEventTrackerOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
