import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQueueAttributesInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    },
    AttributeNames: {
      shape: _AttributeNameList
    }
  }
};
