import { DisassociateAdminAccountInput } from "../shapes/DisassociateAdminAccountInput";
import { DisassociateAdminAccountOutput } from "../shapes/DisassociateAdminAccountOutput";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateAdminAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateAdminAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateAdminAccountInput
  },
  output: {
    shape: DisassociateAdminAccountOutput
  },
  errors: [
    {
      shape: InvalidOperationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
