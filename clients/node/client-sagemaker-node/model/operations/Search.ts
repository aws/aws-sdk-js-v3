import { SearchInput } from "../shapes/SearchInput";
import { SearchOutput } from "../shapes/SearchOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Search: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Search",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchInput
  },
  output: {
    shape: SearchOutput
  },
  errors: []
};
