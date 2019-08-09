import { UpdateInstanceCustomHealthStatusInput } from "./UpdateInstanceCustomHealthStatusInput";
import { UpdateInstanceCustomHealthStatusOutput } from "./UpdateInstanceCustomHealthStatusOutput";
import { InstanceNotFound } from "./InstanceNotFound";
import { ServiceNotFound } from "./ServiceNotFound";
import { CustomHealthNotFound } from "./CustomHealthNotFound";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateInstanceCustomHealthStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateInstanceCustomHealthStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateInstanceCustomHealthStatusInput
  },
  output: {
    shape: UpdateInstanceCustomHealthStatusOutput
  },
  errors: [
    {
      shape: InstanceNotFound
    },
    {
      shape: ServiceNotFound
    },
    {
      shape: CustomHealthNotFound
    },
    {
      shape: InvalidInput
    }
  ]
};
