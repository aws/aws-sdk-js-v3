import { GetGroupInput } from "./GetGroupInput";
import { GetGroupOutput } from "./GetGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGroup",
  http: {
    method: "POST",
    requestUri: "/GetGroup"
  },
  input: {
    shape: GetGroupInput
  },
  output: {
    shape: GetGroupOutput
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
