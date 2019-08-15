import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CSVMappingParameters: _Structure_ = {
  type: "structure",
  required: ["RecordRowDelimiter", "RecordColumnDelimiter"],
  members: {
    RecordRowDelimiter: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RecordColumnDelimiter: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
