import { _ConversionTask } from "./_ConversionTask";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportVolumeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConversionTask: {
      shape: _ConversionTask,
      locationName: "conversionTask"
    }
  }
};
