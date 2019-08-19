import { _UsageRecord } from "./_UsageRecord";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UsageRecordResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UsageRecord: {
      shape: _UsageRecord
    },
    MeteringRecordId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
