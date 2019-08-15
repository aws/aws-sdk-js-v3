import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectSummary: _Structure_ = {
  type: "structure",
  required: ["projectName", "createdDate", "updatedDate"],
  members: {
    arn: {
      shape: {
        type: "string"
      }
    },
    projectName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    updatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    tags: {
      shape: _TagMap
    }
  }
};
