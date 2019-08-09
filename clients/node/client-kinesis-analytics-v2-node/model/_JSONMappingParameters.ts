import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JSONMappingParameters: _Structure_ = {
  type: "structure",
  required: ["RecordRowPath"],
  members: {
    RecordRowPath: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
