import { _ConfigSnapshotDeliveryProperties } from "./_ConfigSnapshotDeliveryProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeliveryChannel: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    s3BucketName: {
      shape: {
        type: "string"
      }
    },
    s3KeyPrefix: {
      shape: {
        type: "string"
      }
    },
    snsTopicARN: {
      shape: {
        type: "string"
      }
    },
    configSnapshotDeliveryProperties: {
      shape: _ConfigSnapshotDeliveryProperties
    }
  }
};
