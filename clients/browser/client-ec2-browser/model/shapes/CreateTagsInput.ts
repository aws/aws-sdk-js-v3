import { _ResourceIdList } from "./_ResourceIdList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTagsInput: _Structure_ = {
  type: "structure",
  required: ["Resources", "Tags"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Resources: {
      shape: _ResourceIdList,
      locationName: "ResourceId"
    },
    Tags: {
      shape: _TagList,
      locationName: "Tag"
    }
  }
};
