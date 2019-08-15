import { DescribeNotebookInstanceLifecycleConfigInput } from "../shapes/DescribeNotebookInstanceLifecycleConfigInput";
import { DescribeNotebookInstanceLifecycleConfigOutput } from "../shapes/DescribeNotebookInstanceLifecycleConfigOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeNotebookInstanceLifecycleConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNotebookInstanceLifecycleConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNotebookInstanceLifecycleConfigInput
  },
  output: {
    shape: DescribeNotebookInstanceLifecycleConfigOutput
  },
  errors: []
};
