import { _InputLocation, _UnmarshalledInputLocation } from "./_InputLocation";

/**
 * Audio Only Hls Settings
 */
export interface _AudioOnlyHlsSettings {
  /**
   * Specifies the group to which the audio Rendition belongs.
   */
  AudioGroupId?: string;

  /**
   * For use with an audio only Stream. Must be a .jpg or .png file. If given, this image will be used as the cover-art for the audio only output. Ideally, it should be formatted for an iPhone screen for two reasons. The iPhone does not resize the image, it crops a centered image on the top/bottom and left/right. Additionally, this image file gets saved bit-for-bit into every 10-second segment file, so will increase bandwidth by {image file size} * {segment count} * {user count.}.
   */
  AudioOnlyImage?: _InputLocation;

  /**
   * Four types of audio-only tracks are supported:
   *
   * Audio-Only Variant Stream
   * The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest.
   *
   * Alternate Audio, Auto Select, Default
   * Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES
   *
   * Alternate Audio, Auto Select, Not Default
   * Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES
   *
   * Alternate Audio, not Auto Select
   * Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
   */
  AudioTrackType?:
    | "ALTERNATE_AUDIO_AUTO_SELECT"
    | "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"
    | "ALTERNATE_AUDIO_NOT_AUTO_SELECT"
    | "AUDIO_ONLY_VARIANT_STREAM"
    | string;
}

export interface _UnmarshalledAudioOnlyHlsSettings
  extends _AudioOnlyHlsSettings {
  /**
   * For use with an audio only Stream. Must be a .jpg or .png file. If given, this image will be used as the cover-art for the audio only output. Ideally, it should be formatted for an iPhone screen for two reasons. The iPhone does not resize the image, it crops a centered image on the top/bottom and left/right. Additionally, this image file gets saved bit-for-bit into every 10-second segment file, so will increase bandwidth by {image file size} * {segment count} * {user count.}.
   */
  AudioOnlyImage?: _UnmarshalledInputLocation;
}
