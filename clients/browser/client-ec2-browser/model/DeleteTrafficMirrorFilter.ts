import { DeleteTrafficMirrorFilterInput } from "./DeleteTrafficMirrorFilterInput";
import { DeleteTrafficMirrorFilterOutput } from "./DeleteTrafficMirrorFilterOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTrafficMirrorFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTrafficMirrorFilter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTrafficMirrorFilterInput
  },
  output: {
    shape: DeleteTrafficMirrorFilterOutput
  },
  errors: []
};
