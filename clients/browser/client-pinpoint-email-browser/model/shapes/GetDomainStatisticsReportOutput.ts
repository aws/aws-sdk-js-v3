import { _OverallVolume } from "./_OverallVolume";
import { _DailyVolumes } from "./_DailyVolumes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainStatisticsReportOutput: _Structure_ = {
  type: "structure",
  required: ["OverallVolume", "DailyVolumes"],
  members: {
    OverallVolume: {
      shape: _OverallVolume
    },
    DailyVolumes: {
      shape: _DailyVolumes
    }
  }
};
