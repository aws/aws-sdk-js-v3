import { _UsageRecordResultList } from "./_UsageRecordResultList";
import { _UsageRecordList } from "./_UsageRecordList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchMeterUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Results: {
      shape: _UsageRecordResultList
    },
    UnprocessedRecords: {
      shape: _UsageRecordList
    }
  }
};
