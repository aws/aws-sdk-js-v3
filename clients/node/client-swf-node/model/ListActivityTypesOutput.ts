import { _ActivityTypeInfoList } from "./_ActivityTypeInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActivityTypesOutput: _Structure_ = {
  type: "structure",
  required: ["typeInfos"],
  members: {
    typeInfos: {
      shape: _ActivityTypeInfoList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
