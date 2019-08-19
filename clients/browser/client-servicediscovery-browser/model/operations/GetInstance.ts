import { GetInstanceInput } from "../shapes/GetInstanceInput";
import { GetInstanceOutput } from "../shapes/GetInstanceOutput";
import { InstanceNotFound } from "../shapes/InstanceNotFound";
import { InvalidInput } from "../shapes/InvalidInput";
import { ServiceNotFound } from "../shapes/ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetInstanceInput
  },
  output: {
    shape: GetInstanceOutput
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
