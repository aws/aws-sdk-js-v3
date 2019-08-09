import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateTagSpecificationRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList,
      locationName: "Tag"
    }
  }
};
