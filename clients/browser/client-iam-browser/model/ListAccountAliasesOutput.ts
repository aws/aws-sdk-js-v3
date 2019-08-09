import { _accountAliasListType } from "./_accountAliasListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAccountAliasesOutput: _Structure_ = {
  type: "structure",
  required: ["AccountAliases"],
  members: {
    AccountAliases: {
      shape: _accountAliasListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
