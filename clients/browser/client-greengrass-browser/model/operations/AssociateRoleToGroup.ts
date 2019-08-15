import { AssociateRoleToGroupInput } from "../shapes/AssociateRoleToGroupInput";
import { AssociateRoleToGroupOutput } from "../shapes/AssociateRoleToGroupOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
