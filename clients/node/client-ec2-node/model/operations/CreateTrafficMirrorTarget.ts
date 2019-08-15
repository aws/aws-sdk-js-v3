import { CreateTrafficMirrorTargetInput } from "../shapes/CreateTrafficMirrorTargetInput";
import { CreateTrafficMirrorTargetOutput } from "../shapes/CreateTrafficMirrorTargetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTrafficMirrorTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrafficMirrorTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTrafficMirrorTargetInput
  },
  output: {
    shape: CreateTrafficMirrorTargetOutput
  },
  errors: []
};
