import { Structure as _Structure_ } from "@aws-sdk/types";

export const ClaimDevicesByClaimCodeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClaimCode: {
      shape: {
        type: "string",
        min: 12
      },
      locationName: "claimCode"
    },
    Total: {
      shape: {
        type: "integer"
      },
      locationName: "total"
    }
  }
};
