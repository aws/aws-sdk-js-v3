import { GetMissionProfileInput } from "../shapes/GetMissionProfileInput";
import { GetMissionProfileOutput } from "../shapes/GetMissionProfileOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
