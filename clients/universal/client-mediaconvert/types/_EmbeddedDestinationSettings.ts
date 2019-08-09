/**
 * Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number.
 */
export interface _EmbeddedDestinationSettings {
  /**
   * Ignore this setting unless your input captions are SCC format. With SCC inputs, you can optionally use this setting to replace the input channel number with the channel number that you specify. Specify a different number for each output captions track for a particular output. If you don't specify an output channel number, the system uses the input channel number for the output channel number. You can optionally combine two captions channels in your output. The two output channel numbers can be one of the following pairs: 1,3; 2,4; 1,4; or 2,3.
   */
  Destination608ChannelNumber?: number;

  /**
   * Ignore this setting unless your input captions are SCC format and you are performing SCC upconvert. With SCC inputs, you can optionally use this setting to specify the 708 service number that is in the output. Specify a different service number for each output captions track for a particular output. If you don't specify an output track number, the system uses the 608 channel number for the output 708 service number. You can combine two captions channels in your output. Service numbers must be distinct.
   */
  Destination708ServiceNumber?: number;
}

export type _UnmarshalledEmbeddedDestinationSettings = _EmbeddedDestinationSettings;
