import { GetServiceRoleForAccountInput } from "../shapes/GetServiceRoleForAccountInput";
import { GetServiceRoleForAccountOutput } from "../shapes/GetServiceRoleForAccountOutput";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
