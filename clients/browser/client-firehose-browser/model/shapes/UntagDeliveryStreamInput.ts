import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagDeliveryStreamInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamName", "TagKeys"],
  members: {
    DeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagKeys: {
      shape: _TagKeyList
    }
  }
};
