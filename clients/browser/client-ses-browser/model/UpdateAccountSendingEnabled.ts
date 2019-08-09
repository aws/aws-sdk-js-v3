import { UpdateAccountSendingEnabledInput } from "./UpdateAccountSendingEnabledInput";
import { UpdateAccountSendingEnabledOutput } from "./UpdateAccountSendingEnabledOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAccountSendingEnabled: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAccountSendingEnabled",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAccountSendingEnabledInput
  },
  output: {
    shape: UpdateAccountSendingEnabledOutput
  },
  errors: []
};
