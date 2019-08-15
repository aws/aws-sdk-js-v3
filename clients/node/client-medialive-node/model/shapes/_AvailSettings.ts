import { _Scte35SpliceInsert } from "./_Scte35SpliceInsert";
import { _Scte35TimeSignalApos } from "./_Scte35TimeSignalApos";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Scte35SpliceInsert: {
      shape: _Scte35SpliceInsert,
      locationName: "scte35SpliceInsert"
    },
    Scte35TimeSignalApos: {
      shape: _Scte35TimeSignalApos,
      locationName: "scte35TimeSignalApos"
    }
  }
};
