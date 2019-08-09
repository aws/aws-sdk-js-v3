import { GetGroupInput } from "./GetGroupInput";
import { GetGroupOutput } from "./GetGroupOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGroup",
  http: {
    method: "GET",
    requestUri: "/greengrass/groups/{GroupId}"
  },
  input: {
    shape: GetGroupInput
  },
  output: {
    shape: GetGroupOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
