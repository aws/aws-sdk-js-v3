import { ListSourceCredentialsInput } from "./ListSourceCredentialsInput";
import { ListSourceCredentialsOutput } from "./ListSourceCredentialsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSourceCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSourceCredentials",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSourceCredentialsInput
  },
  output: {
    shape: ListSourceCredentialsOutput
  },
  errors: []
};
