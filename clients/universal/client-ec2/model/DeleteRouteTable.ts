import { DeleteRouteTableInput } from "./DeleteRouteTableInput";
import { DeleteRouteTableOutput } from "./DeleteRouteTableOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRouteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRouteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRouteTableInput
  },
  output: {
    shape: DeleteRouteTableOutput
  },
  errors: []
};
