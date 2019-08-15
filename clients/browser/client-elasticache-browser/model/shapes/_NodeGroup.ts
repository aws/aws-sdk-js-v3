import { _Endpoint } from "./_Endpoint";
import { _NodeGroupMemberList } from "./_NodeGroupMemberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NodeGroupId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    PrimaryEndpoint: {
      shape: _Endpoint
    },
    ReaderEndpoint: {
      shape: _Endpoint
    },
    Slots: {
      shape: {
        type: "string"
      }
    },
    NodeGroupMembers: {
      shape: _NodeGroupMemberList
    }
  }
};
