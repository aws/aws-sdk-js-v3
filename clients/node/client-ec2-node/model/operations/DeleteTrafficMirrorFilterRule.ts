import { DeleteTrafficMirrorFilterRuleInput } from "../shapes/DeleteTrafficMirrorFilterRuleInput";
import { DeleteTrafficMirrorFilterRuleOutput } from "../shapes/DeleteTrafficMirrorFilterRuleOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTrafficMirrorFilterRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTrafficMirrorFilterRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTrafficMirrorFilterRuleInput
  },
  output: {
    shape: DeleteTrafficMirrorFilterRuleOutput
  },
  errors: []
};
