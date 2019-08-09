import { DeprecateWorkflowTypeInput } from "./DeprecateWorkflowTypeInput";
import { DeprecateWorkflowTypeOutput } from "./DeprecateWorkflowTypeOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeDeprecatedFault } from "./TypeDeprecatedFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeprecateWorkflowType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeprecateWorkflowType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeprecateWorkflowTypeInput
  },
  output: {
    shape: DeprecateWorkflowTypeOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: TypeDeprecatedFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
