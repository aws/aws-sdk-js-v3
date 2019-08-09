import { ListEndpointsInput } from "./ListEndpointsInput";
import { ListEndpointsOutput } from "./ListEndpointsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEndpoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEndpointsInput
  },
  output: {
    shape: ListEndpointsOutput
  },
  errors: []
};
