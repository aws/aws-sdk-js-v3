import { GetGatewayInput } from "../shapes/GetGatewayInput";
import { GetGatewayOutput } from "../shapes/GetGatewayOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetGatewayInput
  },
  output: {
    shape: GetGatewayOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
