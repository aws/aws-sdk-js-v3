import { DetachInternetGatewayInput } from "./DetachInternetGatewayInput";
import { DetachInternetGatewayOutput } from "./DetachInternetGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachInternetGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachInternetGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachInternetGatewayInput
  },
  output: {
    shape: DetachInternetGatewayOutput
  },
  errors: []
};
