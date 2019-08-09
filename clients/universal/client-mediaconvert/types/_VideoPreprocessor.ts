import {
  _ColorCorrector,
  _UnmarshalledColorCorrector
} from "./_ColorCorrector";
import { _Deinterlacer, _UnmarshalledDeinterlacer } from "./_Deinterlacer";
import { _ImageInserter, _UnmarshalledImageInserter } from "./_ImageInserter";
import { _NoiseReducer, _UnmarshalledNoiseReducer } from "./_NoiseReducer";
import {
  _TimecodeBurnin,
  _UnmarshalledTimecodeBurnin
} from "./_TimecodeBurnin";

/**
 * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
 */
export interface _VideoPreprocessor {
  /**
   * Enable the Color corrector (ColorCorrector) feature if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ColorCorrector?: _ColorCorrector;

  /**
   * Use Deinterlacer (Deinterlacer) to produce smoother motion and a clearer picture.
   */
  Deinterlacer?: _Deinterlacer;

  /**
   * Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ImageInserter?: _ImageInserter;

  /**
   * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  NoiseReducer?: _NoiseReducer;

  /**
   * Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
   */
  TimecodeBurnin?: _TimecodeBurnin;
}

export interface _UnmarshalledVideoPreprocessor extends _VideoPreprocessor {
  /**
   * Enable the Color corrector (ColorCorrector) feature if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ColorCorrector?: _UnmarshalledColorCorrector;

  /**
   * Use Deinterlacer (Deinterlacer) to produce smoother motion and a clearer picture.
   */
  Deinterlacer?: _UnmarshalledDeinterlacer;

  /**
   * Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ImageInserter?: _UnmarshalledImageInserter;

  /**
   * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  NoiseReducer?: _UnmarshalledNoiseReducer;

  /**
   * Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
   */
  TimecodeBurnin?: _UnmarshalledTimecodeBurnin;
}
