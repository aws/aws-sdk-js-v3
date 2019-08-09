import { GetGroupsInput } from "./GetGroupsInput";
import { GetGroupsOutput } from "./GetGroupsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGroups",
  http: {
    method: "POST",
    requestUri: "/Groups"
  },
  input: {
    shape: GetGroupsInput
  },
  output: {
    shape: GetGroupsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottledException
    }
  ]
};
