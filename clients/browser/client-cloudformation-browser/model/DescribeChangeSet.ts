import { DescribeChangeSetInput } from "./DescribeChangeSetInput";
import { DescribeChangeSetOutput } from "./DescribeChangeSetOutput";
import { ChangeSetNotFoundException } from "./ChangeSetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeChangeSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeChangeSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeChangeSetInput
  },
  output: {
    shape: DescribeChangeSetOutput,
    resultWrapper: "DescribeChangeSetResult"
  },
  errors: [
    {
      shape: ChangeSetNotFoundException
    }
  ]
};
