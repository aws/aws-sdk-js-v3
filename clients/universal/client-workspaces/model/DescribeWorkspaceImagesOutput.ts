import { _WorkspaceImageList } from "./_WorkspaceImageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspaceImagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Images: {
      shape: _WorkspaceImageList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
