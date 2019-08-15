import { DisassociateServiceRoleFromAccountInput } from "../shapes/DisassociateServiceRoleFromAccountInput";
import { DisassociateServiceRoleFromAccountOutput } from "../shapes/DisassociateServiceRoleFromAccountOutput";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateServiceRoleFromAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateServiceRoleFromAccount",
  http: {
    method: "DELETE",
    requestUri: "/greengrass/servicerole"
  },
  input: {
    shape: DisassociateServiceRoleFromAccountInput
  },
  output: {
    shape: DisassociateServiceRoleFromAccountOutput
  },
  errors: [
    {
      shape: InternalServerErrorException
    }
  ]
};
