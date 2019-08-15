import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRegionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    includeAvailabilityZones: {
      shape: {
        type: "boolean"
      }
    },
    includeRelationalDatabaseAvailabilityZones: {
      shape: {
        type: "boolean"
      }
    }
  }
};
