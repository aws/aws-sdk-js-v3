import { AssociateServiceRoleToAccountInput } from "./AssociateServiceRoleToAccountInput";
import { AssociateServiceRoleToAccountOutput } from "./AssociateServiceRoleToAccountOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
