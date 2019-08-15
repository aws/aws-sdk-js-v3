import { CreateEventTrackerInput } from "../shapes/CreateEventTrackerInput";
import { CreateEventTrackerOutput } from "../shapes/CreateEventTrackerOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
