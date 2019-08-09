import { DeleteFlowLogsInput } from "./DeleteFlowLogsInput";
import { DeleteFlowLogsOutput } from "./DeleteFlowLogsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteFlowLogs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFlowLogs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFlowLogsInput
  },
  output: {
    shape: DeleteFlowLogsOutput
  },
  errors: []
};
