import { ListWorkGroupsInput } from "../shapes/ListWorkGroupsInput";
import { ListWorkGroupsOutput } from "../shapes/ListWorkGroupsOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListWorkGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWorkGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListWorkGroupsInput
  },
  output: {
    shape: ListWorkGroupsOutput
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
