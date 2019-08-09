import { ___listOfScte35Descriptor } from "./___listOfScte35Descriptor";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte35TimeSignalScheduleActionSettings: _Structure_ = {
  type: "structure",
  required: ["Scte35Descriptors"],
  members: {
    Scte35Descriptors: {
      shape: ___listOfScte35Descriptor,
      locationName: "scte35Descriptors"
    }
  }
};
