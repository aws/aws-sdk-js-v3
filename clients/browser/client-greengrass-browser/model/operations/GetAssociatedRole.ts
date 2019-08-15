import { GetAssociatedRoleInput } from "../shapes/GetAssociatedRoleInput";
import { GetAssociatedRoleOutput } from "../shapes/GetAssociatedRoleOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAssociatedRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAssociatedRole",
  http: {
    method: "GET",
    requestUri: "/greengrass/groups/{GroupId}/role"
  },
  input: {
    shape: GetAssociatedRoleInput
  },
  output: {
    shape: GetAssociatedRoleOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
