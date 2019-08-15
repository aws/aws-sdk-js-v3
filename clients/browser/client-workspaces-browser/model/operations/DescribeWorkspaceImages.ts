import { DescribeWorkspaceImagesInput } from "../shapes/DescribeWorkspaceImagesInput";
import { DescribeWorkspaceImagesOutput } from "../shapes/DescribeWorkspaceImagesOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
