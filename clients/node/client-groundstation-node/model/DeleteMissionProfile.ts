import { DeleteMissionProfileInput } from "./DeleteMissionProfileInput";
import { DeleteMissionProfileOutput } from "./DeleteMissionProfileOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
