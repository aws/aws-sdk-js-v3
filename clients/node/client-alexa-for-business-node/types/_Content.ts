import { _Text, _UnmarshalledText } from "./_Text";
import { _Ssml, _UnmarshalledSsml } from "./_Ssml";
import { _Audio, _UnmarshalledAudio } from "./_Audio";

/**
 * <p>The content definition. This can contain only one text, SSML, or audio list object.</p>
 */
export interface _Content {
  /**
   * <p>The list of text messages.</p>
   */
  TextList?: Array<_Text> | Iterable<_Text>;

  /**
   * <p>The list of SSML messages.</p>
   */
  SsmlList?: Array<_Ssml> | Iterable<_Ssml>;

  /**
   * <p>The list of audio messages.</p>
   */
  AudioList?: Array<_Audio> | Iterable<_Audio>;
}

export interface _UnmarshalledContent extends _Content {
  /**
   * <p>The list of text messages.</p>
   */
  TextList?: Array<_UnmarshalledText>;

  /**
   * <p>The list of SSML messages.</p>
   */
  SsmlList?: Array<_UnmarshalledSsml>;

  /**
   * <p>The list of audio messages.</p>
   */
  AudioList?: Array<_UnmarshalledAudio>;
}
