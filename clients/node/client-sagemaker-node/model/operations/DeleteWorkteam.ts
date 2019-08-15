import { DeleteWorkteamInput } from "../shapes/DeleteWorkteamInput";
import { DeleteWorkteamOutput } from "../shapes/DeleteWorkteamOutput";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
