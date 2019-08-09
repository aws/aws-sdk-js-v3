import { ListUsersInput } from "./ListUsersInput";
import { ListUsersOutput } from "./ListUsersOutput";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUsers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUsersInput
  },
  output: {
    shape: ListUsersOutput,
    resultWrapper: "ListUsersResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
