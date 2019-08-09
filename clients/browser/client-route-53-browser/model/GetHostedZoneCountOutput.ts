import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetHostedZoneCountOutput: _Structure_ = {
  type: "structure",
  required: ["HostedZoneCount"],
  members: {
    HostedZoneCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
