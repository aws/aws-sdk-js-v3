import { _ObjectIdentifierToLinkNameMap } from "./_ObjectIdentifierToLinkNameMap";
import { _ObjectIdentifierAndLinkNameList } from "./_ObjectIdentifierAndLinkNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListObjectParentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parents: {
      shape: _ObjectIdentifierToLinkNameMap
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    ParentLinks: {
      shape: _ObjectIdentifierAndLinkNameList
    }
  }
};
