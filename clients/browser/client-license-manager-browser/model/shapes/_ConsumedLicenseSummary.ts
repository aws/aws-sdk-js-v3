import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConsumedLicenseSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    ConsumedLicenses: {
      shape: {
        type: "integer"
      }
    }
  }
};
