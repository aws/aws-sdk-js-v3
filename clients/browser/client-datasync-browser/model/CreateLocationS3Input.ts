import { _S3Config } from "./_S3Config";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLocationS3Input: _Structure_ = {
  type: "structure",
  required: ["S3BucketArn", "S3Config"],
  members: {
    Subdirectory: {
      shape: {
        type: "string"
      }
    },
    S3BucketArn: {
      shape: {
        type: "string"
      }
    },
    S3Config: {
      shape: _S3Config
    },
    Tags: {
      shape: _TagList
    }
  }
};
