import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PrefixList: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Cidrs: {
      shape: _ValueStringList,
      locationName: "cidrSet"
    },
    PrefixListId: {
      shape: {
        type: "string"
      },
      locationName: "prefixListId"
    },
    PrefixListName: {
      shape: {
        type: "string"
      },
      locationName: "prefixListName"
    }
  }
};
