import { UpdateMissionProfileInput } from "./UpdateMissionProfileInput";
import { UpdateMissionProfileOutput } from "./UpdateMissionProfileOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateMissionProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMissionProfile",
  http: {
    method: "PUT",
    requestUri: "/missionprofile/{missionProfileId}"
  },
  input: {
    shape: UpdateMissionProfileInput
  },
  output: {
    shape: UpdateMissionProfileOutput
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
