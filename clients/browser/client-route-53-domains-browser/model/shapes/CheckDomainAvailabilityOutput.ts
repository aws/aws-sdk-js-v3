import { Structure as _Structure_ } from "@aws-sdk/types";

export const CheckDomainAvailabilityOutput: _Structure_ = {
  type: "structure",
  required: ["Availability"],
  members: {
    Availability: {
      shape: {
        type: "string"
      }
    }
  }
};
