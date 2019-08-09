import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PrefixListId: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    PrefixListId: {
      shape: {
        type: "string"
      },
      locationName: "prefixListId"
    }
  }
};
