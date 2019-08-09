/**
 * Video Selector Program Id
 */
export interface _VideoSelectorProgramId {
  /**
   * Selects a specific program from within a multi-program transport stream. If the program doesn't exist, the first program within the transport stream will be selected by default.
   */
  ProgramId?: number;
}

export type _UnmarshalledVideoSelectorProgramId = _VideoSelectorProgramId;
