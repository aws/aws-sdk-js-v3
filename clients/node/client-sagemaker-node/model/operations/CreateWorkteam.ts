import { CreateWorkteamInput } from "../shapes/CreateWorkteamInput";
import { CreateWorkteamOutput } from "../shapes/CreateWorkteamOutput";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateWorkteam: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateWorkteam",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateWorkteamInput
  },
  output: {
    shape: CreateWorkteamOutput
  },
  errors: [
    {
      shape: ResourceInUse
    },
    {
      shape: ResourceLimitExceeded
    }
  ]
};
