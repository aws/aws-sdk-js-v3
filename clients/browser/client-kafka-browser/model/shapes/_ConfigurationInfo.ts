import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigurationInfo: _Structure_ = {
  type: "structure",
  required: ["Revision", "Arn"],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Revision: {
      shape: {
        type: "integer"
      },
      locationName: "revision"
    }
  }
};
