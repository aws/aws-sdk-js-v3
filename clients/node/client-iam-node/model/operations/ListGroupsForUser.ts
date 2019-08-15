import { ListGroupsForUserInput } from "../shapes/ListGroupsForUserInput";
import { ListGroupsForUserOutput } from "../shapes/ListGroupsForUserOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGroupsForUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroupsForUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGroupsForUserInput
  },
  output: {
    shape: ListGroupsForUserOutput,
    resultWrapper: "ListGroupsForUserResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
