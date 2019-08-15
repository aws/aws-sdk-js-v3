import { ListServicesInput } from "../shapes/ListServicesInput";
import { ListServicesOutput } from "../shapes/ListServicesOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServicesInput
  },
  output: {
    shape: ListServicesOutput
  },
  errors: [
    {
      shape: InvalidInput
    }
  ]
};
