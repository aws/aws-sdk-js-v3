import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelatedFinding: _Structure_ = {
  type: "structure",
  required: ["ProductArn", "Id"],
  members: {
    ProductArn: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    }
  }
};
