import { _RecordDetail } from "./_RecordDetail";
import { _RecordOutputs } from "./_RecordOutputs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRecordOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RecordDetail: {
      shape: _RecordDetail
    },
    RecordOutputs: {
      shape: _RecordOutputs
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
