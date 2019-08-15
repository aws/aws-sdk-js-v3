import { ListGroupVersionsInput } from "../shapes/ListGroupVersionsInput";
import { ListGroupVersionsOutput } from "../shapes/ListGroupVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGroupVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroupVersions",
  http: {
    method: "GET",
    requestUri: "/greengrass/groups/{GroupId}/versions"
  },
  input: {
    shape: ListGroupVersionsInput
  },
  output: {
    shape: ListGroupVersionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
