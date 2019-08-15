import { _ResourceTagMappingList } from "./_ResourceTagMappingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PaginationToken: {
      shape: {
        type: "string"
      }
    },
    ResourceTagMappingList: {
      shape: _ResourceTagMappingList
    }
  }
};
