import { GetRoleInput } from "../shapes/GetRoleInput";
import { GetRoleOutput } from "../shapes/GetRoleOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
