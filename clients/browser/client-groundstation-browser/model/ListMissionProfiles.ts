import { ListMissionProfilesInput } from "./ListMissionProfilesInput";
import { ListMissionProfilesOutput } from "./ListMissionProfilesOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
