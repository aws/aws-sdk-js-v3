import { AssociateAdminAccountInput } from "../shapes/AssociateAdminAccountInput";
import { AssociateAdminAccountOutput } from "../shapes/AssociateAdminAccountOutput";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
