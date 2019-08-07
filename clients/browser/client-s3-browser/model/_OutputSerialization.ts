import { _CSVOutput } from "./_CSVOutput";
import { _JSONOutput } from "./_JSONOutput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputSerialization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CSV: {
      shape: _CSVOutput
    },
    JSON: {
      shape: _JSONOutput
    }
  }
};
