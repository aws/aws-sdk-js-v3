import { _FileShareInfoList } from "./_FileShareInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFileSharesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FileShareInfoList: {
      shape: _FileShareInfoList
    }
  }
};
