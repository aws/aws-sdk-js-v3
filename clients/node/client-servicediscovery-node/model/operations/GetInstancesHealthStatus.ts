import { GetInstancesHealthStatusInput } from "../shapes/GetInstancesHealthStatusInput";
import { GetInstancesHealthStatusOutput } from "../shapes/GetInstancesHealthStatusOutput";
import { InstanceNotFound } from "../shapes/InstanceNotFound";
import { InvalidInput } from "../shapes/InvalidInput";
import { ServiceNotFound } from "../shapes/ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
