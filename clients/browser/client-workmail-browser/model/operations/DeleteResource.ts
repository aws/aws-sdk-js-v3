import { DeleteResourceInput } from "../shapes/DeleteResourceInput";
import { DeleteResourceOutput } from "../shapes/DeleteResourceOutput";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteResourceInput
  },
  output: {
    shape: DeleteResourceOutput
  },
  errors: [
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
