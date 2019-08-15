import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SortCriteria: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeName: {
      shape: {
        type: "string"
      },
      locationName: "attributeName"
    },
    OrderBy: {
      shape: {
        type: "string"
      },
      locationName: "orderBy"
    }
  }
};
