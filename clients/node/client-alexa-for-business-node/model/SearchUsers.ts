import { SearchUsersInput } from "./SearchUsersInput";
import { SearchUsersOutput } from "./SearchUsersOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
