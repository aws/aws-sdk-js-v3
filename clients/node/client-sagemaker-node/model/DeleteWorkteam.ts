import { DeleteWorkteamInput } from "./DeleteWorkteamInput";
import { DeleteWorkteamOutput } from "./DeleteWorkteamOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteWorkteam: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteWorkteam",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteWorkteamInput
  },
  output: {
    shape: DeleteWorkteamOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
