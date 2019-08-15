import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudFormationStackRecordSourceInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceType: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    }
  }
};
