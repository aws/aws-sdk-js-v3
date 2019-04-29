import { _QueueAttributeMap } from "./_QueueAttributeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQueueAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _QueueAttributeMap,
      locationName: "Attribute"
    }
  }
};
