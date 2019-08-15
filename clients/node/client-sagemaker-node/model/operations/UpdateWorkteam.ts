import { UpdateWorkteamInput } from "../shapes/UpdateWorkteamInput";
import { UpdateWorkteamOutput } from "../shapes/UpdateWorkteamOutput";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateWorkteam: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateWorkteam",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateWorkteamInput
  },
  output: {
    shape: UpdateWorkteamOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
