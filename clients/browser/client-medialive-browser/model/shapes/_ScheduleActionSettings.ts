import { _HlsTimedMetadataScheduleActionSettings } from "./_HlsTimedMetadataScheduleActionSettings";
import { _InputSwitchScheduleActionSettings } from "./_InputSwitchScheduleActionSettings";
import { _PauseStateScheduleActionSettings } from "./_PauseStateScheduleActionSettings";
import { _Scte35ReturnToNetworkScheduleActionSettings } from "./_Scte35ReturnToNetworkScheduleActionSettings";
import { _Scte35SpliceInsertScheduleActionSettings } from "./_Scte35SpliceInsertScheduleActionSettings";
import { _Scte35TimeSignalScheduleActionSettings } from "./_Scte35TimeSignalScheduleActionSettings";
import { _StaticImageActivateScheduleActionSettings } from "./_StaticImageActivateScheduleActionSettings";
import { _StaticImageDeactivateScheduleActionSettings } from "./_StaticImageDeactivateScheduleActionSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduleActionSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HlsTimedMetadataSettings: {
      shape: _HlsTimedMetadataScheduleActionSettings,
      locationName: "hlsTimedMetadataSettings"
    },
    InputSwitchSettings: {
      shape: _InputSwitchScheduleActionSettings,
      locationName: "inputSwitchSettings"
    },
    PauseStateSettings: {
      shape: _PauseStateScheduleActionSettings,
      locationName: "pauseStateSettings"
    },
    Scte35ReturnToNetworkSettings: {
      shape: _Scte35ReturnToNetworkScheduleActionSettings,
      locationName: "scte35ReturnToNetworkSettings"
    },
    Scte35SpliceInsertSettings: {
      shape: _Scte35SpliceInsertScheduleActionSettings,
      locationName: "scte35SpliceInsertSettings"
    },
    Scte35TimeSignalSettings: {
      shape: _Scte35TimeSignalScheduleActionSettings,
      locationName: "scte35TimeSignalSettings"
    },
    StaticImageActivateSettings: {
      shape: _StaticImageActivateScheduleActionSettings,
      locationName: "staticImageActivateSettings"
    },
    StaticImageDeactivateSettings: {
      shape: _StaticImageDeactivateScheduleActionSettings,
      locationName: "staticImageDeactivateSettings"
    }
  }
};
