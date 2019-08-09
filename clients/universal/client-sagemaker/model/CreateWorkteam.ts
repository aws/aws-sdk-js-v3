import { CreateWorkteamInput } from "./CreateWorkteamInput";
import { CreateWorkteamOutput } from "./CreateWorkteamOutput";
import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
