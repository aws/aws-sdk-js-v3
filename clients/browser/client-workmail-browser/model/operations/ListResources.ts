import { ListResourcesInput } from "../shapes/ListResourcesInput";
import { ListResourcesOutput } from "../shapes/ListResourcesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourcesInput
  },
  output: {
    shape: ListResourcesOutput
  },
  errors: [
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
