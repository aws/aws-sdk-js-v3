import { DisassociateAdminAccountInput } from "./DisassociateAdminAccountInput";
import { DisassociateAdminAccountOutput } from "./DisassociateAdminAccountOutput";
import { InvalidOperationException } from "./InvalidOperationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
