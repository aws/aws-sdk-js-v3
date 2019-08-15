import { CreateRouteTableInput } from "../shapes/CreateRouteTableInput";
import { CreateRouteTableOutput } from "../shapes/CreateRouteTableOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRouteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRouteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRouteTableInput
  },
  output: {
    shape: CreateRouteTableOutput
  },
  errors: []
};
