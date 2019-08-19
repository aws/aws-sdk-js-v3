import { _ResourcePathComponentList } from "./_ResourcePathComponentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourcePath: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Components: {
      shape: _ResourcePathComponentList
    }
  }
};
