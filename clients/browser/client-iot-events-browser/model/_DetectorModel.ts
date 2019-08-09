import { _DetectorModelDefinition } from "./_DetectorModelDefinition";
import { _DetectorModelConfiguration } from "./_DetectorModelConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectorModel: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detectorModelDefinition: {
      shape: _DetectorModelDefinition
    },
    detectorModelConfiguration: {
      shape: _DetectorModelConfiguration
    }
  }
};
