import { ListRolesInput } from "../shapes/ListRolesInput";
import { ListRolesOutput } from "../shapes/ListRolesOutput";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRoles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRoles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRolesInput
  },
  output: {
    shape: ListRolesOutput,
    resultWrapper: "ListRolesResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
