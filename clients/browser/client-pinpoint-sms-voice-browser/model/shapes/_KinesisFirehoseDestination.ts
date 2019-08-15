import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisFirehoseDestination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeliveryStreamArn: {
      shape: {
        type: "string"
      }
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
