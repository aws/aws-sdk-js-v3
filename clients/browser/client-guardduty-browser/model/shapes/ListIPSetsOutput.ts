import { _IpSetIds } from "./_IpSetIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIPSetsOutput: _Structure_ = {
  type: "structure",
  required: ["IpSetIds"],
  members: {
    IpSetIds: {
      shape: _IpSetIds,
      locationName: "ipSetIds"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
