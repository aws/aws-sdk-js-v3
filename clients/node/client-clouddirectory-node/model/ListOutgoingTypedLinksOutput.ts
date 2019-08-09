import { _TypedLinkSpecifierList } from "./_TypedLinkSpecifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOutgoingTypedLinksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TypedLinkSpecifiers: {
      shape: _TypedLinkSpecifierList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
