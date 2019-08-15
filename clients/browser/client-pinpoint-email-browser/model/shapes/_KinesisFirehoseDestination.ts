import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisFirehoseDestination: _Structure_ = {
  type: "structure",
  required: ["IamRoleArn", "DeliveryStreamArn"],
  members: {
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    DeliveryStreamArn: {
      shape: {
        type: "string"
      }
    }
  }
};
