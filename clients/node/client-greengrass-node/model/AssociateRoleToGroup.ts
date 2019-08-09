import { AssociateRoleToGroupInput } from "./AssociateRoleToGroupInput";
import { AssociateRoleToGroupOutput } from "./AssociateRoleToGroupOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateRoleToGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateRoleToGroup",
  http: {
    method: "PUT",
    requestUri: "/greengrass/groups/{GroupId}/role"
  },
  input: {
    shape: AssociateRoleToGroupInput
  },
  output: {
    shape: AssociateRoleToGroupOutput
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
