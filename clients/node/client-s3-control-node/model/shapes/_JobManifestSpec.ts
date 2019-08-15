import { _JobManifestFieldList } from "./_JobManifestFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobManifestSpec: _Structure_ = {
  type: "structure",
  required: ["Format"],
  members: {
    Format: {
      shape: {
        type: "string"
      }
    },
    Fields: {
      shape: _JobManifestFieldList
    }
  }
};
