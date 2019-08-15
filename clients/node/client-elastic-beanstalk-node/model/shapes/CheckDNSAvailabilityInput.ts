import { Structure as _Structure_ } from "@aws-sdk/types";

export const CheckDNSAvailabilityInput: _Structure_ = {
  type: "structure",
  required: ["CNAMEPrefix"],
  members: {
    CNAMEPrefix: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
