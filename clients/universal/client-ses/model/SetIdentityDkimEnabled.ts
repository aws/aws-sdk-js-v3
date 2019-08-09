import { SetIdentityDkimEnabledInput } from "./SetIdentityDkimEnabledInput";
import { SetIdentityDkimEnabledOutput } from "./SetIdentityDkimEnabledOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetIdentityDkimEnabled: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetIdentityDkimEnabled",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetIdentityDkimEnabledInput
  },
  output: {
    shape: SetIdentityDkimEnabledOutput,
    resultWrapper: "SetIdentityDkimEnabledResult"
  },
  errors: []
};
