import { _NodeTypeList } from "./_NodeTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAllowedNodeTypeModificationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScaleUpModifications: {
      shape: _NodeTypeList
    }
  }
};
