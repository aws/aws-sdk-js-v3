import { _UtteranceData, _UnmarshalledUtteranceData } from "./_UtteranceData";

/**
 * <p>Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.</p>
 */
export interface _UtteranceList {
  /**
   * <p>The version of the bot that processed the list.</p>
   */
  botVersion?: string;

  /**
   * <p>One or more <a>UtteranceData</a> objects that contain information about the utterances that have been made to a bot. The maximum number of object is 100.</p>
   */
  utterances?: Array<_UtteranceData> | Iterable<_UtteranceData>;
}

export interface _UnmarshalledUtteranceList extends _UtteranceList {
  /**
   * <p>One or more <a>UtteranceData</a> objects that contain information about the utterances that have been made to a bot. The maximum number of object is 100.</p>
   */
  utterances?: Array<_UnmarshalledUtteranceData>;
}
