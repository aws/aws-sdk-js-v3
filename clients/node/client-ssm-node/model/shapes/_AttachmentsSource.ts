import { _AttachmentsSourceValues } from "./_AttachmentsSourceValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttachmentsSource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _AttachmentsSourceValues
    }
  }
};
