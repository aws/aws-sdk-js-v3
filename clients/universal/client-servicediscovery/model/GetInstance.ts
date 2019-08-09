import { GetInstanceInput } from "./GetInstanceInput";
import { GetInstanceOutput } from "./GetInstanceOutput";
import { InstanceNotFound } from "./InstanceNotFound";
import { InvalidInput } from "./InvalidInput";
import { ServiceNotFound } from "./ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
