import { GetServiceGraphInput } from "../shapes/GetServiceGraphInput";
import { GetServiceGraphOutput } from "../shapes/GetServiceGraphOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetServiceGraph: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServiceGraph",
  http: {
    method: "POST",
    requestUri: "/ServiceGraph"
  },
  input: {
    shape: GetServiceGraphInput
  },
  output: {
    shape: GetServiceGraphOutput
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
