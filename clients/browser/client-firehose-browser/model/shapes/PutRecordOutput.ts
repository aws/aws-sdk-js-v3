import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRecordOutput: _Structure_ = {
  type: "structure",
  required: ["RecordId"],
  members: {
    RecordId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    }
  }
};
