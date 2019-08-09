import { _TransformDataSource } from "./_TransformDataSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransformInput: _Structure_ = {
  type: "structure",
  required: ["DataSource"],
  members: {
    DataSource: {
      shape: _TransformDataSource
    },
    ContentType: {
      shape: {
        type: "string"
      }
    },
    CompressionType: {
      shape: {
        type: "string"
      }
    },
    SplitType: {
      shape: {
        type: "string"
      }
    }
  }
};
