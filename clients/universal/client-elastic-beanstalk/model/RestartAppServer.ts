import { RestartAppServerInput } from "./RestartAppServerInput";
import { RestartAppServerOutput } from "./RestartAppServerOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestartAppServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestartAppServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestartAppServerInput
  },
  output: {
    shape: RestartAppServerOutput
  },
  errors: []
};
