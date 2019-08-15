import { _VolumeStatistics } from "./_VolumeStatistics";
import { _DomainIspPlacements } from "./_DomainIspPlacements";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OverallVolume: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeStatistics: {
      shape: _VolumeStatistics
    },
    ReadRatePercent: {
      shape: {
        type: "float"
      }
    },
    DomainIspPlacements: {
      shape: _DomainIspPlacements
    }
  }
};
