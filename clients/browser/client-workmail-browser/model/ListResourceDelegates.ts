import { ListResourceDelegatesInput } from "./ListResourceDelegatesInput";
import { ListResourceDelegatesOutput } from "./ListResourceDelegatesOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListResourceDelegates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourceDelegates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourceDelegatesInput
  },
  output: {
    shape: ListResourceDelegatesOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: EntityStateException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    }
  ]
};
