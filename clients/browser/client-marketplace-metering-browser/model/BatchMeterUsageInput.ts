import { _UsageRecordList } from "./_UsageRecordList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchMeterUsageInput: _Structure_ = {
  type: "structure",
  required: ["UsageRecords", "ProductCode"],
  members: {
    UsageRecords: {
      shape: _UsageRecordList
    },
    ProductCode: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
