import { ModifyTrafficMirrorFilterRuleInput } from "../shapes/ModifyTrafficMirrorFilterRuleInput";
import { ModifyTrafficMirrorFilterRuleOutput } from "../shapes/ModifyTrafficMirrorFilterRuleOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyTrafficMirrorFilterRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyTrafficMirrorFilterRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyTrafficMirrorFilterRuleInput
  },
  output: {
    shape: ModifyTrafficMirrorFilterRuleOutput
  },
  errors: []
};
