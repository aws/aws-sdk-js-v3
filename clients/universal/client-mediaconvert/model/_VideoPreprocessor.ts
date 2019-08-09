import { _ColorCorrector } from "./_ColorCorrector";
import { _Deinterlacer } from "./_Deinterlacer";
import { _ImageInserter } from "./_ImageInserter";
import { _NoiseReducer } from "./_NoiseReducer";
import { _TimecodeBurnin } from "./_TimecodeBurnin";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoPreprocessor: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ColorCorrector: {
      shape: _ColorCorrector,
      locationName: "colorCorrector"
    },
    Deinterlacer: {
      shape: _Deinterlacer,
      locationName: "deinterlacer"
    },
    ImageInserter: {
      shape: _ImageInserter,
      locationName: "imageInserter"
    },
    NoiseReducer: {
      shape: _NoiseReducer,
      locationName: "noiseReducer"
    },
    TimecodeBurnin: {
      shape: _TimecodeBurnin,
      locationName: "timecodeBurnin"
    }
  }
};
