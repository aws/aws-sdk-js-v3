import { _ListTagsForDeliveryStreamOutputTagList } from "./_ListTagsForDeliveryStreamOutputTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForDeliveryStreamOutput: _Structure_ = {
  type: "structure",
  required: ["Tags", "HasMoreTags"],
  members: {
    Tags: {
      shape: _ListTagsForDeliveryStreamOutputTagList
    },
    HasMoreTags: {
      shape: {
        type: "boolean"
      }
    }
  }
};
