import { ListInstanceGroupsInput } from "../shapes/ListInstanceGroupsInput";
import { ListInstanceGroupsOutput } from "../shapes/ListInstanceGroupsOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInstanceGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInstanceGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListInstanceGroupsInput
  },
  output: {
    shape: ListInstanceGroupsOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
