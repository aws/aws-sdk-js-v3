import { _SamplingTargetDocumentList } from "./_SamplingTargetDocumentList";
import { _UnprocessedStatisticsList } from "./_UnprocessedStatisticsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSamplingTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SamplingTargetDocuments: {
      shape: _SamplingTargetDocumentList
    },
    LastRuleModification: {
      shape: {
        type: "timestamp"
      }
    },
    UnprocessedStatistics: {
      shape: _UnprocessedStatisticsList
    }
  }
};
