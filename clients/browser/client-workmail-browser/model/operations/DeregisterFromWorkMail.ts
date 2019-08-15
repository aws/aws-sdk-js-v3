import { DeregisterFromWorkMailInput } from "../shapes/DeregisterFromWorkMailInput";
import { DeregisterFromWorkMailOutput } from "../shapes/DeregisterFromWorkMailOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterFromWorkMail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterFromWorkMail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterFromWorkMailInput
  },
  output: {
    shape: DeregisterFromWorkMailOutput
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
