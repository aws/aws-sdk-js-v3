import { _VolumeStatistics } from "./_VolumeStatistics";
import { _DomainIspPlacements } from "./_DomainIspPlacements";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DailyVolume: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StartDate: {
      shape: {
        type: "timestamp"
      }
    },
    VolumeStatistics: {
      shape: _VolumeStatistics
    },
    DomainIspPlacements: {
      shape: _DomainIspPlacements
    }
  }
};
