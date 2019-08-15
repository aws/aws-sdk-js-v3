import { _WorkspaceImageIdList } from "./_WorkspaceImageIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspaceImagesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImageIds: {
      shape: _WorkspaceImageIdList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
