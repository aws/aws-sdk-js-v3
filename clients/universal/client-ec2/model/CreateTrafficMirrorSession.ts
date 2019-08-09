import { CreateTrafficMirrorSessionInput } from "./CreateTrafficMirrorSessionInput";
import { CreateTrafficMirrorSessionOutput } from "./CreateTrafficMirrorSessionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTrafficMirrorSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrafficMirrorSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTrafficMirrorSessionInput
  },
  output: {
    shape: CreateTrafficMirrorSessionOutput
  },
  errors: []
};
