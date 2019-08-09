import { _RecordsEvent } from "./_RecordsEvent";
import { _StatsEvent } from "./_StatsEvent";
import { _ProgressEvent } from "./_ProgressEvent";
import { _ContinuationEvent } from "./_ContinuationEvent";
import { _EndEvent } from "./_EndEvent";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SelectObjectContentEventStream: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Records: {
      shape: _RecordsEvent
    },
    Stats: {
      shape: _StatsEvent
    },
    Progress: {
      shape: _ProgressEvent
    },
    Cont: {
      shape: _ContinuationEvent
    },
    End: {
      shape: _EndEvent
    }
  }
};
