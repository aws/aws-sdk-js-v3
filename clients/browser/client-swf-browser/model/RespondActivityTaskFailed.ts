import { RespondActivityTaskFailedInput } from "./RespondActivityTaskFailedInput";
import { RespondActivityTaskFailedOutput } from "./RespondActivityTaskFailedOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RespondActivityTaskFailed: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RespondActivityTaskFailed",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RespondActivityTaskFailedInput
  },
  output: {
    shape: RespondActivityTaskFailedOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
