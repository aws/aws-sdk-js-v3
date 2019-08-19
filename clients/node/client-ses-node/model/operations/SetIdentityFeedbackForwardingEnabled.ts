import { SetIdentityFeedbackForwardingEnabledInput } from "../shapes/SetIdentityFeedbackForwardingEnabledInput";
import { SetIdentityFeedbackForwardingEnabledOutput } from "../shapes/SetIdentityFeedbackForwardingEnabledOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetIdentityFeedbackForwardingEnabled: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetIdentityFeedbackForwardingEnabled",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetIdentityFeedbackForwardingEnabledInput
  },
  output: {
    shape: SetIdentityFeedbackForwardingEnabledOutput,
    resultWrapper: "SetIdentityFeedbackForwardingEnabledResult"
  },
  errors: []
};
