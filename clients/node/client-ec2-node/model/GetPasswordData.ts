import { GetPasswordDataInput } from "./GetPasswordDataInput";
import { GetPasswordDataOutput } from "./GetPasswordDataOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPasswordData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPasswordData",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPasswordDataInput
  },
  output: {
    shape: GetPasswordDataOutput
  },
  errors: []
};
