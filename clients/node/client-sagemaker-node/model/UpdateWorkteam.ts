import { UpdateWorkteamInput } from "./UpdateWorkteamInput";
import { UpdateWorkteamOutput } from "./UpdateWorkteamOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
