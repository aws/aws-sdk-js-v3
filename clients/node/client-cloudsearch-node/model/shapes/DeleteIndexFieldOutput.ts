import { _IndexFieldStatus } from "./_IndexFieldStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteIndexFieldOutput: _Structure_ = {
  type: "structure",
  required: ["IndexField"],
  members: {
    IndexField: {
      shape: _IndexFieldStatus
    }
  }
};
