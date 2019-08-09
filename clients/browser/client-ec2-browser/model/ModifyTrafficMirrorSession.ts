import { ModifyTrafficMirrorSessionInput } from "./ModifyTrafficMirrorSessionInput";
import { ModifyTrafficMirrorSessionOutput } from "./ModifyTrafficMirrorSessionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyTrafficMirrorSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyTrafficMirrorSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyTrafficMirrorSessionInput
  },
  output: {
    shape: ModifyTrafficMirrorSessionOutput
  },
  errors: []
};
