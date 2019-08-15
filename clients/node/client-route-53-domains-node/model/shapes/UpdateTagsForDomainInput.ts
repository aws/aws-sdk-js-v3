import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTagsForDomainInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    TagsToUpdate: {
      shape: _TagList
    }
  }
};
