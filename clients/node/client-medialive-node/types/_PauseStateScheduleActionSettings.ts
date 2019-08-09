import {
  _PipelinePauseStateSettings,
  _UnmarshalledPipelinePauseStateSettings
} from "./_PipelinePauseStateSettings";

/**
 * Settings for the action to set pause state of a channel.
 */
export interface _PauseStateScheduleActionSettings {
  /**
   * Placeholder documentation for __listOfPipelinePauseStateSettings
   */
  Pipelines?:
    | Array<_PipelinePauseStateSettings>
    | Iterable<_PipelinePauseStateSettings>;
}

export interface _UnmarshalledPauseStateScheduleActionSettings
  extends _PauseStateScheduleActionSettings {
  /**
   * Placeholder documentation for __listOfPipelinePauseStateSettings
   */
  Pipelines?: Array<_UnmarshalledPipelinePauseStateSettings>;
}
