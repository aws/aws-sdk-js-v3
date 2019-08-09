import { RespondActivityTaskCanceledInput } from "./RespondActivityTaskCanceledInput";
import { RespondActivityTaskCanceledOutput } from "./RespondActivityTaskCanceledOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RespondActivityTaskCanceled: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RespondActivityTaskCanceled",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RespondActivityTaskCanceledInput
  },
  output: {
    shape: RespondActivityTaskCanceledOutput
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
