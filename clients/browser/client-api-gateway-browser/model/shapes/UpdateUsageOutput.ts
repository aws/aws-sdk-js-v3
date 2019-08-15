import { _MapOfKeyUsages } from "./_MapOfKeyUsages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    usagePlanId: {
      shape: {
        type: "string"
      }
    },
    startDate: {
      shape: {
        type: "string"
      }
    },
    endDate: {
      shape: {
        type: "string"
      }
    },
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _MapOfKeyUsages,
      locationName: "values"
    }
  }
};
