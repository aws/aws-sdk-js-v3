import { GetMailboxDetailsInput } from "../shapes/GetMailboxDetailsInput";
import { GetMailboxDetailsOutput } from "../shapes/GetMailboxDetailsOutput";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMailboxDetails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMailboxDetails",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMailboxDetailsInput
  },
  output: {
    shape: GetMailboxDetailsOutput
  },
  errors: [
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    },
    {
      shape: EntityNotFoundException
    }
  ]
};
