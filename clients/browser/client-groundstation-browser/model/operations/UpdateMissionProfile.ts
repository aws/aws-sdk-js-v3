import { UpdateMissionProfileInput } from "../shapes/UpdateMissionProfileInput";
import { UpdateMissionProfileOutput } from "../shapes/UpdateMissionProfileOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
