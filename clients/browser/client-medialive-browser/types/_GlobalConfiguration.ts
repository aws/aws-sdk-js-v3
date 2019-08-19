import {
  _InputLossBehavior,
  _UnmarshalledInputLossBehavior
} from "./_InputLossBehavior";

/**
 * Global Configuration
 */
export interface _GlobalConfiguration {
  /**
   * Value to set the initial audio gain for the Live Event.
   */
  InitialAudioGain?: number;

  /**
   * Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   */
  InputEndAction?: "NONE" | "SWITCH_AND_LOOP_INPUTS" | string;

  /**
   * Settings for system actions when input is lost.
   */
  InputLossBehavior?: _InputLossBehavior;

  /**
   * Indicates how MediaLive pipelines are synchronized.
   *
   * PIPELINELOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.
   * EPOCHLOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
   */
  OutputLockingMode?: "EPOCH_LOCKING" | "PIPELINE_LOCKING" | string;

  /**
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
   */
  OutputTimingSource?: "INPUT_CLOCK" | "SYSTEM_CLOCK" | string;

  /**
   * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
   */
  SupportLowFramerateInputs?: "DISABLED" | "ENABLED" | string;
}

export interface _UnmarshalledGlobalConfiguration extends _GlobalConfiguration {
  /**
   * Settings for system actions when input is lost.
   */
  InputLossBehavior?: _UnmarshalledInputLossBehavior;
}
