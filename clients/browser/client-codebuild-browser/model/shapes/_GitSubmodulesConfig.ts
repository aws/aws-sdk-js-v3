import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GitSubmodulesConfig: _Structure_ = {
  type: "structure",
  required: ["fetchSubmodules"],
  members: {
    fetchSubmodules: {
      shape: {
        type: "boolean"
      }
    }
  }
};
