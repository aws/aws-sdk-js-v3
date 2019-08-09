import { MoveAddressToVpcInput } from "./MoveAddressToVpcInput";
import { MoveAddressToVpcOutput } from "./MoveAddressToVpcOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const MoveAddressToVpc: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MoveAddressToVpc",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MoveAddressToVpcInput
  },
  output: {
    shape: MoveAddressToVpcOutput
  },
  errors: []
};
