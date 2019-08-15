import { _ExportsInfo } from "./_ExportsInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExportConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exportsInfo: {
      shape: _ExportsInfo
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
