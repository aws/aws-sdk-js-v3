import { GetInstancesHealthStatusInput } from "./GetInstancesHealthStatusInput";
import { GetInstancesHealthStatusOutput } from "./GetInstancesHealthStatusOutput";
import { InstanceNotFound } from "./InstanceNotFound";
import { InvalidInput } from "./InvalidInput";
import { ServiceNotFound } from "./ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetInstancesHealthStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInstancesHealthStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetInstancesHealthStatusInput
  },
  output: {
    shape: GetInstancesHealthStatusOutput
  },
  errors: [
    {
      shape: InstanceNotFound
    },
    {
      shape: InvalidInput
    },
    {
      shape: ServiceNotFound
    }
  ]
};
