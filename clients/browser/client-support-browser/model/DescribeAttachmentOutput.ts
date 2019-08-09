import { _Attachment } from "./_Attachment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAttachmentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    attachment: {
      shape: _Attachment
    }
  }
};
