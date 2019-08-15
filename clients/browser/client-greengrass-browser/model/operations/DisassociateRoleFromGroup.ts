import { DisassociateRoleFromGroupInput } from "../shapes/DisassociateRoleFromGroupInput";
import { DisassociateRoleFromGroupOutput } from "../shapes/DisassociateRoleFromGroupOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateRoleFromGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateRoleFromGroup",
  http: {
    method: "DELETE",
    requestUri: "/greengrass/groups/{GroupId}/role"
  },
  input: {
    shape: DisassociateRoleFromGroupInput
  },
  output: {
    shape: DisassociateRoleFromGroupOutput
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
