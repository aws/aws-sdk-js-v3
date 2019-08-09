import { AssociateAdminAccountInput } from "./AssociateAdminAccountInput";
import { AssociateAdminAccountOutput } from "./AssociateAdminAccountOutput";
import { InvalidOperationException } from "./InvalidOperationException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateAdminAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateAdminAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateAdminAccountInput
  },
  output: {
    shape: AssociateAdminAccountOutput
  },
  errors: [
    {
      shape: InvalidOperationException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
