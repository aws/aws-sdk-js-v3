import { CreateMissionProfileInput } from "./CreateMissionProfileInput";
import { CreateMissionProfileOutput } from "./CreateMissionProfileOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
