import { _ObjectIdentifierAndLinkNameList } from "./_ObjectIdentifierAndLinkNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchListObjectParentsResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParentLinks: {
      shape: _ObjectIdentifierAndLinkNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
