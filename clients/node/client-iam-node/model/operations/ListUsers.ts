import { ListUsersInput } from "../shapes/ListUsersInput";
import { ListUsersOutput } from "../shapes/ListUsersOutput";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
