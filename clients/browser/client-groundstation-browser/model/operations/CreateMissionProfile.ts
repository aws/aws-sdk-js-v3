import { CreateMissionProfileInput } from "../shapes/CreateMissionProfileInput";
import { CreateMissionProfileOutput } from "../shapes/CreateMissionProfileOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateMissionProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMissionProfile",
  http: {
    method: "POST",
    requestUri: "/missionprofile"
  },
  input: {
    shape: CreateMissionProfileInput
  },
  output: {
    shape: CreateMissionProfileOutput
  },
  errors: [
    {
      shape: DependencyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
