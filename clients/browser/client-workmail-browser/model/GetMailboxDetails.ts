import { GetMailboxDetailsInput } from "./GetMailboxDetailsInput";
import { GetMailboxDetailsOutput } from "./GetMailboxDetailsOutput";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
