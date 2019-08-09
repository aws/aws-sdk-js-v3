import { _RecordDetail } from "./_RecordDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateProvisionedProductOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RecordDetail: {
      shape: _RecordDetail
    }
  }
};
