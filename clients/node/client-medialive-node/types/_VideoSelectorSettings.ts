import {
  _VideoSelectorPid,
  _UnmarshalledVideoSelectorPid
} from "./_VideoSelectorPid";
import {
  _VideoSelectorProgramId,
  _UnmarshalledVideoSelectorProgramId
} from "./_VideoSelectorProgramId";

/**
 * Video Selector Settings
 */
export interface _VideoSelectorSettings {
  /**
   * Video Selector Pid
   */
  VideoSelectorPid?: _VideoSelectorPid;

  /**
   * Video Selector Program Id
   */
  VideoSelectorProgramId?: _VideoSelectorProgramId;
}

export interface _UnmarshalledVideoSelectorSettings
  extends _VideoSelectorSettings {
  /**
   * Video Selector Pid
   */
  VideoSelectorPid?: _UnmarshalledVideoSelectorPid;

  /**
   * Video Selector Program Id
   */
  VideoSelectorProgramId?: _UnmarshalledVideoSelectorProgramId;
}
