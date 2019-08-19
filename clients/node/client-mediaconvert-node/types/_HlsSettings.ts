/**
 * Settings for HLS output groups
 */
export interface _HlsSettings {
  /**
   * Specifies the group to which the audio Rendition belongs.
   */
  AudioGroupId?: string;

  /**
   * Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create an audio-only file in a raw container. Regardless of the value that you specify here, if this output has video, the service will place the output into an MPEG2-TS container.
   */
  AudioOnlyContainer?: "AUTOMATIC" | "M2TS" | string;

  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
   */
  AudioTrackType?:
    | "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"
    | "ALTERNATE_AUDIO_AUTO_SELECT"
    | "ALTERNATE_AUDIO_NOT_AUTO_SELECT"
    | "AUDIO_ONLY_VARIANT_STREAM"
    | string;

  /**
   * When set to INCLUDE, writes I-Frame Only Manifest in addition to the HLS manifest
   */
  IFrameOnlyManifest?: "INCLUDE" | "EXCLUDE" | string;

  /**
   * String concatenated to end of segment filenames. Accepts "Format Identifiers":#format_identifier_parameters.
   */
  SegmentModifier?: string;
}

export type _UnmarshalledHlsSettings = _HlsSettings;
