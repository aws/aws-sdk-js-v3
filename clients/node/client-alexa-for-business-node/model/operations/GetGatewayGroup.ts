import { GetGatewayGroupInput } from "../shapes/GetGatewayGroupInput";
import { GetGatewayGroupOutput } from "../shapes/GetGatewayGroupOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetGatewayGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGatewayGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetGatewayGroupInput
  },
  output: {
    shape: GetGatewayGroupOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
