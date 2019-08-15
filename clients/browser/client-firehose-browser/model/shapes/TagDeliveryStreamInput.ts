import { _TagDeliveryStreamInputTagList } from "./_TagDeliveryStreamInputTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagDeliveryStreamInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamName", "Tags"],
  members: {
    DeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagDeliveryStreamInputTagList
    }
  }
};
