import { CreateFlowLogsInput } from "../shapes/CreateFlowLogsInput";
import { CreateFlowLogsOutput } from "../shapes/CreateFlowLogsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFlowLogs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFlowLogs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateFlowLogsInput
  },
  output: {
    shape: CreateFlowLogsOutput
  },
  errors: []
};
