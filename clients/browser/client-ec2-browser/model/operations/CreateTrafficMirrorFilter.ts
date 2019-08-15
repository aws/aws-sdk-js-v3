import { CreateTrafficMirrorFilterInput } from "../shapes/CreateTrafficMirrorFilterInput";
import { CreateTrafficMirrorFilterOutput } from "../shapes/CreateTrafficMirrorFilterOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTrafficMirrorFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrafficMirrorFilter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTrafficMirrorFilterInput
  },
  output: {
    shape: CreateTrafficMirrorFilterOutput
  },
  errors: []
};
