import { CreateTrafficMirrorFilterRuleInput } from "../shapes/CreateTrafficMirrorFilterRuleInput";
import { CreateTrafficMirrorFilterRuleOutput } from "../shapes/CreateTrafficMirrorFilterRuleOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTrafficMirrorFilterRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrafficMirrorFilterRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTrafficMirrorFilterRuleInput
  },
  output: {
    shape: CreateTrafficMirrorFilterRuleOutput
  },
  errors: []
};
