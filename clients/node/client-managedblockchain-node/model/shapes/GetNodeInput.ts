import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNodeInput: _Structure_ = {
  type: "structure",
  required: ["NetworkId", "MemberId", "NodeId"],
  members: {
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "networkId"
    },
    MemberId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "memberId"
    },
    NodeId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "nodeId"
    }
  }
};
