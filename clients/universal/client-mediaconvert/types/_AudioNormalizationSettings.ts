/**
 * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
 */
export interface _AudioNormalizationSettings {
  /**
   * Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.
   */
  Algorithm?:
    | "ITU_BS_1770_1"
    | "ITU_BS_1770_2"
    | "ITU_BS_1770_3"
    | "ITU_BS_1770_4"
    | string;

  /**
   * When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.
   */
  AlgorithmControl?: "CORRECT_AUDIO" | "MEASURE_ONLY" | string;

  /**
   * Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected. Gating only applies when not using real_time_correction.
   */
  CorrectionGateLevel?: number;

  /**
   * If set to LOG, log each output's audio track loudness to a CSV file.
   */
  LoudnessLogging?: "LOG" | "DONT_LOG" | string;

  /**
   * If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.
   */
  PeakCalculation?: "TRUE_PEAK" | "NONE" | string;

  /**
   * When you use Audio normalization (AudioNormalizationSettings), optionally use this setting to specify a target loudness. If you don't specify a value here, the encoder chooses a value for you, based on the algorithm that you choose for Algorithm (algorithm). If you choose algorithm 1770-1, the encoder will choose -24 LKFS; otherwise, the encoder will choose -23 LKFS.
   */
  TargetLkfs?: number;
}

export type _UnmarshalledAudioNormalizationSettings = _AudioNormalizationSettings;
