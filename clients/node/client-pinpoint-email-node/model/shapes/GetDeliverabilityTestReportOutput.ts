import { _DeliverabilityTestReport } from "./_DeliverabilityTestReport";
import { _PlacementStatistics } from "./_PlacementStatistics";
import { _IspPlacements } from "./_IspPlacements";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeliverabilityTestReportOutput: _Structure_ = {
  type: "structure",
  required: ["DeliverabilityTestReport", "OverallPlacement", "IspPlacements"],
  members: {
    DeliverabilityTestReport: {
      shape: _DeliverabilityTestReport
    },
    OverallPlacement: {
      shape: _PlacementStatistics
    },
    IspPlacements: {
      shape: _IspPlacements
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
