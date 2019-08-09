/**
 * To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion (Id3Insertion).
 */
export interface _Id3Insertion {
  /**
   * Use ID3 tag (Id3) to provide a tag value in base64-encode format.
   */
  Id3?: string;

  /**
   * Provide a Timecode (TimeCode) in HH:MM:SS:FF or HH:MM:SS;FF format.
   */
  Timecode?: string;
}

export type _UnmarshalledId3Insertion = _Id3Insertion;
