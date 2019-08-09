import { RespondActivityTaskCompletedInput } from "./RespondActivityTaskCompletedInput";
import { RespondActivityTaskCompletedOutput } from "./RespondActivityTaskCompletedOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RespondActivityTaskCompleted: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RespondActivityTaskCompleted",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RespondActivityTaskCompletedInput
  },
  output: {
    shape: RespondActivityTaskCompletedOutput
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
