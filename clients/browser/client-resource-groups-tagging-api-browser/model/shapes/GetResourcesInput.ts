import { _TagFilterList } from "./_TagFilterList";
import { _ResourceTypeFilterList } from "./_ResourceTypeFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourcesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PaginationToken: {
      shape: {
        type: "string"
      }
    },
    TagFilters: {
      shape: _TagFilterList
    },
    ResourcesPerPage: {
      shape: {
        type: "integer"
      }
    },
    TagsPerPage: {
      shape: {
        type: "integer"
      }
    },
    ResourceTypeFilters: {
      shape: _ResourceTypeFilterList
    }
  }
};
