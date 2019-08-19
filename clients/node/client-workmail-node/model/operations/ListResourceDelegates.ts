import { ListResourceDelegatesInput } from "../shapes/ListResourceDelegatesInput";
import { ListResourceDelegatesOutput } from "../shapes/ListResourceDelegatesOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
