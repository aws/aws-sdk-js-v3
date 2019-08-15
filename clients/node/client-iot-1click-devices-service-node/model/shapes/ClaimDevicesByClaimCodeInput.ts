import { Structure as _Structure_ } from "@aws-sdk/types";

export const ClaimDevicesByClaimCodeInput: _Structure_ = {
  type: "structure",
  required: ["ClaimCode"],
  members: {
    ClaimCode: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "claimCode"
    }
  }
};
