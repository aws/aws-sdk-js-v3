import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTagsForDomainInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "TagsToDelete"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    TagsToDelete: {
      shape: _TagKeyList
    }
  }
};
