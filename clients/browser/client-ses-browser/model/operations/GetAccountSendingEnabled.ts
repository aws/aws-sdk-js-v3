import { GetAccountSendingEnabledInput } from "../shapes/GetAccountSendingEnabledInput";
import { GetAccountSendingEnabledOutput } from "../shapes/GetAccountSendingEnabledOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAccountSendingEnabled: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccountSendingEnabled",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAccountSendingEnabledInput
  },
  output: {
    shape: GetAccountSendingEnabledOutput,
    resultWrapper: "GetAccountSendingEnabledResult"
  },
  errors: []
};
