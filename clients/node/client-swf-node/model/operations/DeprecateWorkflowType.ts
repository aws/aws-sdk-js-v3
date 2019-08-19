import { DeprecateWorkflowTypeInput } from "../shapes/DeprecateWorkflowTypeInput";
import { DeprecateWorkflowTypeOutput } from "../shapes/DeprecateWorkflowTypeOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { TypeDeprecatedFault } from "../shapes/TypeDeprecatedFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
