import { RespondActivityTaskFailedInput } from "../shapes/RespondActivityTaskFailedInput";
import { RespondActivityTaskFailedOutput } from "../shapes/RespondActivityTaskFailedOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
