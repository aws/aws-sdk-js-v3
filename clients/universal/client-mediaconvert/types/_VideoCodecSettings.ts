import {
  _FrameCaptureSettings,
  _UnmarshalledFrameCaptureSettings
} from "./_FrameCaptureSettings";
import { _H264Settings, _UnmarshalledH264Settings } from "./_H264Settings";
import { _H265Settings, _UnmarshalledH265Settings } from "./_H265Settings";
import { _Mpeg2Settings, _UnmarshalledMpeg2Settings } from "./_Mpeg2Settings";
import {
  _ProresSettings,
  _UnmarshalledProresSettings
} from "./_ProresSettings";

/**
 * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * FRAME_CAPTURE, FrameCaptureSettings
 */
export interface _VideoCodecSettings {
  /**
   * Specifies the video codec. This must be equal to one of the enum values defined by the object  VideoCodec.
   */
  Codec?: "FRAME_CAPTURE" | "H_264" | "H_265" | "MPEG2" | "PRORES" | string;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
   */
  FrameCaptureSettings?: _FrameCaptureSettings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
   */
  H264Settings?: _H264Settings;

  /**
   * Settings for H265 codec
   */
  H265Settings?: _H265Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
   */
  Mpeg2Settings?: _Mpeg2Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
   */
  ProresSettings?: _ProresSettings;
}

export interface _UnmarshalledVideoCodecSettings extends _VideoCodecSettings {
  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
   */
  FrameCaptureSettings?: _UnmarshalledFrameCaptureSettings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
   */
  H264Settings?: _UnmarshalledH264Settings;

  /**
   * Settings for H265 codec
   */
  H265Settings?: _UnmarshalledH265Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
   */
  Mpeg2Settings?: _UnmarshalledMpeg2Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
   */
  ProresSettings?: _UnmarshalledProresSettings;
}
