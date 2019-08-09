import { _FailedItems } from "./_FailedItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveAttributesFromFindingsOutput: _Structure_ = {
  type: "structure",
  required: ["failedItems"],
  members: {
    failedItems: {
      shape: _FailedItems
    }
  }
};
