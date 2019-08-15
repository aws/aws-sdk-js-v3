import { UpdateInstanceCustomHealthStatusInput } from "../shapes/UpdateInstanceCustomHealthStatusInput";
import { UpdateInstanceCustomHealthStatusOutput } from "../shapes/UpdateInstanceCustomHealthStatusOutput";
import { InstanceNotFound } from "../shapes/InstanceNotFound";
import { ServiceNotFound } from "../shapes/ServiceNotFound";
import { CustomHealthNotFound } from "../shapes/CustomHealthNotFound";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
