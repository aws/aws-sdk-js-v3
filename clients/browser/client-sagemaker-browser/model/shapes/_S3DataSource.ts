import { _AttributeNames } from "./_AttributeNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3DataSource: _Structure_ = {
  type: "structure",
  required: ["S3DataType", "S3Uri"],
  members: {
    S3DataType: {
      shape: {
        type: "string"
      }
    },
    S3Uri: {
      shape: {
        type: "string"
      }
    },
    S3DataDistributionType: {
      shape: {
        type: "string"
      }
    },
    AttributeNames: {
      shape: _AttributeNames
    }
  }
};
