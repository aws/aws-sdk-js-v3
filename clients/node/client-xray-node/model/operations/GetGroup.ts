import { GetGroupInput } from "../shapes/GetGroupInput";
import { GetGroupOutput } from "../shapes/GetGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
