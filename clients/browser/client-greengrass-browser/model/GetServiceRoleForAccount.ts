import { GetServiceRoleForAccountInput } from "./GetServiceRoleForAccountInput";
import { GetServiceRoleForAccountOutput } from "./GetServiceRoleForAccountOutput";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetServiceRoleForAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServiceRoleForAccount",
  http: {
    method: "GET",
    requestUri: "/greengrass/servicerole"
  },
  input: {
    shape: GetServiceRoleForAccountInput
  },
  output: {
    shape: GetServiceRoleForAccountOutput
  },
  errors: [
    {
      shape: InternalServerErrorException
    }
  ]
};
