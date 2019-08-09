import { GetServiceInput } from "./GetServiceInput";
import { GetServiceOutput } from "./GetServiceOutput";
import { InvalidInput } from "./InvalidInput";
import { ServiceNotFound } from "./ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetService",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServiceInput
  },
  output: {
    shape: GetServiceOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: ServiceNotFound
    }
  ]
};
