import { DeleteMissionProfileInput } from "../shapes/DeleteMissionProfileInput";
import { DeleteMissionProfileOutput } from "../shapes/DeleteMissionProfileOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMissionProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMissionProfile",
  http: {
    method: "DELETE",
    requestUri: "/missionprofile/{missionProfileId}"
  },
  input: {
    shape: DeleteMissionProfileInput
  },
  output: {
    shape: DeleteMissionProfileOutput
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
