import { AssociateServiceRoleToAccountInput } from "../shapes/AssociateServiceRoleToAccountInput";
import { AssociateServiceRoleToAccountOutput } from "../shapes/AssociateServiceRoleToAccountOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateServiceRoleToAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateServiceRoleToAccount",
  http: {
    method: "PUT",
    requestUri: "/greengrass/servicerole"
  },
  input: {
    shape: AssociateServiceRoleToAccountInput
  },
  output: {
    shape: AssociateServiceRoleToAccountOutput
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
