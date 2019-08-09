import { GetAssociatedRoleInput } from "./GetAssociatedRoleInput";
import { GetAssociatedRoleOutput } from "./GetAssociatedRoleOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
