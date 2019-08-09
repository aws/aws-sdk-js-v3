import { DescribeWorkspaceImagesInput } from "./DescribeWorkspaceImagesInput";
import { DescribeWorkspaceImagesOutput } from "./DescribeWorkspaceImagesOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeWorkspaceImages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkspaceImages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkspaceImagesInput
  },
  output: {
    shape: DescribeWorkspaceImagesOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    }
  ]
};
