import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrackingOptions: _Structure_ = {
  type: "structure",
  required: ["CustomRedirectDomain"],
  members: {
    CustomRedirectDomain: {
      shape: {
        type: "string"
      }
    }
  }
};
