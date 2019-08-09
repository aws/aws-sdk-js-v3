import { GetRoleInput } from "./GetRoleInput";
import { GetRoleOutput } from "./GetRoleOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRoleInput
  },
  output: {
    shape: GetRoleOutput,
    resultWrapper: "GetRoleResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
