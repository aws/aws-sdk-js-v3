import { DisableLoggingInput } from "../shapes/DisableLoggingInput";
import { DisableLoggingOutput } from "../shapes/DisableLoggingOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
