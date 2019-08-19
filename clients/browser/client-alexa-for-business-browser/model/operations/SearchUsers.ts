import { SearchUsersInput } from "../shapes/SearchUsersInput";
import { SearchUsersOutput } from "../shapes/SearchUsersOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchUsers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchUsersInput
  },
  output: {
    shape: SearchUsersOutput
  },
  errors: []
};
