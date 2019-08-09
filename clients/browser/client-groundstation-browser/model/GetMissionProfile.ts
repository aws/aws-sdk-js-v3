import { GetMissionProfileInput } from "./GetMissionProfileInput";
import { GetMissionProfileOutput } from "./GetMissionProfileOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMissionProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMissionProfile",
  http: {
    method: "GET",
    requestUri: "/missionprofile/{missionProfileId}"
  },
  input: {
    shape: GetMissionProfileInput
  },
  output: {
    shape: GetMissionProfileOutput
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
