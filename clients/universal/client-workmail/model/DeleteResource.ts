import { DeleteResourceInput } from "./DeleteResourceInput";
import { DeleteResourceOutput } from "./DeleteResourceOutput";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
