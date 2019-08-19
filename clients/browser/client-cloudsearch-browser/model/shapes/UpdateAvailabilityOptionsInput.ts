import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAvailabilityOptionsInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "MultiAZ"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    MultiAZ: {
      shape: {
        type: "boolean"
      }
    }
  }
};
