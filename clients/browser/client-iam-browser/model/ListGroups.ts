import { ListGroupsInput } from "./ListGroupsInput";
import { ListGroupsOutput } from "./ListGroupsOutput";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGroupsInput
  },
  output: {
    shape: ListGroupsOutput,
    resultWrapper: "ListGroupsResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
