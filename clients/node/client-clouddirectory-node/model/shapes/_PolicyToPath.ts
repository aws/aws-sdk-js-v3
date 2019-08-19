import { _PolicyAttachmentList } from "./_PolicyAttachmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyToPath: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Path: {
      shape: {
        type: "string"
      }
    },
    Policies: {
      shape: _PolicyAttachmentList
    }
  }
};
