import { ModifyInstanceEventStartTimeInput } from "./ModifyInstanceEventStartTimeInput";
import { ModifyInstanceEventStartTimeOutput } from "./ModifyInstanceEventStartTimeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyInstanceEventStartTime: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyInstanceEventStartTime",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyInstanceEventStartTimeInput
  },
  output: {
    shape: ModifyInstanceEventStartTimeOutput
  },
  errors: []
};
