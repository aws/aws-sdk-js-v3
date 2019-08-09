import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TerminologyData: _Structure_ = {
  type: "structure",
  required: ["File", "Format"],
  members: {
    File: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    Format: {
      shape: {
        type: "string"
      }
    }
  }
};
