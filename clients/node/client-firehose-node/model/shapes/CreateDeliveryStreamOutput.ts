import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeliveryStreamOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeliveryStreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
