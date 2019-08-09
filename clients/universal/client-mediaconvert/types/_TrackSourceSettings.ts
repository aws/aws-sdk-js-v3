/**
 * Settings specific to caption sources that are specfied by track number. Sources include IMSC in IMF.
 */
export interface _TrackSourceSettings {
  /**
   * Use this setting to select a single captions track from a source. Track numbers correspond to the order in the captions source file. For IMF sources, track numbering is based on the order that the captions appear in the CPL. For example, use 1 to select the captions asset that is listed first in the CPL. To include more than one captions track in your job outputs, create multiple input captions selectors. Specify one track per selector.
   */
  TrackNumber?: number;
}

export type _UnmarshalledTrackSourceSettings = _TrackSourceSettings;
