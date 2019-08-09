import { ListServicesInput } from "./ListServicesInput";
import { ListServicesOutput } from "./ListServicesOutput";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
