import { ListMissionProfilesInput } from "../shapes/ListMissionProfilesInput";
import { ListMissionProfilesOutput } from "../shapes/ListMissionProfilesOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListMissionProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMissionProfiles",
  http: {
    method: "GET",
    requestUri: "/missionprofile"
  },
  input: {
    shape: ListMissionProfilesInput
  },
  output: {
    shape: ListMissionProfilesOutput
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
