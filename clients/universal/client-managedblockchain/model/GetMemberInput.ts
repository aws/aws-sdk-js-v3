import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMemberInput: _Structure_ = {
  type: "structure",
  required: ["NetworkId", "MemberId"],
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
    }
  }
};
