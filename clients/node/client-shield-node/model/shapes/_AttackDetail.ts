import { _SubResourceSummaryList } from "./_SubResourceSummaryList";
import { _SummarizedCounterList } from "./_SummarizedCounterList";
import { _AttackProperties } from "./_AttackProperties";
import { _MitigationList } from "./_MitigationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttackDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttackId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubResources: {
      shape: _SubResourceSummaryList
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    AttackCounters: {
      shape: _SummarizedCounterList
    },
    AttackProperties: {
      shape: _AttackProperties
    },
    Mitigations: {
      shape: _MitigationList
    }
  }
};
