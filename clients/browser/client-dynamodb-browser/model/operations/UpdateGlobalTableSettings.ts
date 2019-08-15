import { UpdateGlobalTableSettingsInput } from "../shapes/UpdateGlobalTableSettingsInput";
import { UpdateGlobalTableSettingsOutput } from "../shapes/UpdateGlobalTableSettingsOutput";
import { GlobalTableNotFoundException } from "../shapes/GlobalTableNotFoundException";
import { ReplicaNotFoundException } from "../shapes/ReplicaNotFoundException";
import { IndexNotFoundException } from "../shapes/IndexNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGlobalTableSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGlobalTableSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGlobalTableSettingsInput
  },
  output: {
    shape: UpdateGlobalTableSettingsOutput
  },
  errors: [
    {
      shape: GlobalTableNotFoundException
    },
    {
      shape: ReplicaNotFoundException
    },
    {
      shape: IndexNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InternalServerError
    }
  ]
};
