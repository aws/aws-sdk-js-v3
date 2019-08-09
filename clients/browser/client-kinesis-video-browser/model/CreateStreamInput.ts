import { _ResourceTags } from "./_ResourceTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamInput: _Structure_ = {
  type: "structure",
  required: ["StreamName"],
  members: {
    DeviceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MediaType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KmsKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DataRetentionInHours: {
      shape: {
        type: "integer"
      }
    },
    Tags: {
      shape: _ResourceTags
    }
  }
};
