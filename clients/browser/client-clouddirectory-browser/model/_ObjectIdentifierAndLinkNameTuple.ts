import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ObjectIdentifierAndLinkNameTuple: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ObjectIdentifier: {
      shape: {
        type: "string"
      }
    },
    LinkName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
