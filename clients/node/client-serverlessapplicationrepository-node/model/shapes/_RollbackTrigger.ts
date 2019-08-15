import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RollbackTrigger: _Structure_ = {
  type: "structure",
  required: ["Type", "Arn"],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};
