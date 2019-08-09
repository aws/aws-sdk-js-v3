import { _LayerVersionsListItem } from "./_LayerVersionsListItem";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LayersListItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LayerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LayerArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LatestMatchingVersion: {
      shape: _LayerVersionsListItem
    }
  }
};
