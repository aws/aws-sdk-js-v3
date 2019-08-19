import { ListGroupsInput } from "../shapes/ListGroupsInput";
import { ListGroupsOutput } from "../shapes/ListGroupsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroups",
  http: {
    method: "GET",
    requestUri: "/greengrass/groups"
  },
  input: {
    shape: ListGroupsInput
  },
  output: {
    shape: ListGroupsOutput
  },
  errors: []
};
