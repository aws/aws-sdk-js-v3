import { GetAccessKeyInfoInput } from "../shapes/GetAccessKeyInfoInput";
import { GetAccessKeyInfoOutput } from "../shapes/GetAccessKeyInfoOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAccessKeyInfo: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccessKeyInfo",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAccessKeyInfoInput
  },
  output: {
    shape: GetAccessKeyInfoOutput,
    resultWrapper: "GetAccessKeyInfoResult"
  },
  errors: []
};
