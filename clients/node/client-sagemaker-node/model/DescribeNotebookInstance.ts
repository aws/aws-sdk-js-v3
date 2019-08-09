import { DescribeNotebookInstanceInput } from "./DescribeNotebookInstanceInput";
import { DescribeNotebookInstanceOutput } from "./DescribeNotebookInstanceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeNotebookInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNotebookInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNotebookInstanceInput
  },
  output: {
    shape: DescribeNotebookInstanceOutput
  },
  errors: []
};
