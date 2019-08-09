import { DisableLoggingInput } from "./DisableLoggingInput";
import { DisableLoggingOutput } from "./DisableLoggingOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableLogging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableLogging",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableLoggingInput
  },
  output: {
    shape: DisableLoggingOutput,
    resultWrapper: "DisableLoggingResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    }
  ]
};
