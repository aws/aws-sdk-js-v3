import { _Hdr10Metadata, _UnmarshalledHdr10Metadata } from "./_Hdr10Metadata";

/**
 * Selector for video.
 */
export interface _VideoSelector {
  /**
   * If your input video has accurate color space metadata, or if you don't know about color space, leave this set to the default value FOLLOW. The service will automatically detect your input color space. If your input video has metadata indicating the wrong color space, or if your input video is missing color space metadata that should be there, specify the accurate color space here. If you choose HDR10, you can also correct inaccurate color space coefficients, using the HDR master display information controls. You must also set Color space usage (ColorSpaceUsage) to FORCE for the service to use these values.
   */
  ColorSpace?: "FOLLOW" | "REC_601" | "REC_709" | "HDR10" | "HLG_2020" | string;

  /**
   * There are two sources for color metadata, the input file and the job configuration (in the Color space and HDR master display informaiton settings). The Color space usage setting controls which takes precedence. FORCE: The system will use color metadata supplied by user, if any. If the user does not supply color metadata, the system will use data from the source. FALLBACK: The system will use color metadata from the source. If source has no color metadata, the system will use user-supplied color metadata values if available.
   */
  ColorSpaceUsage?: "FORCE" | "FALLBACK" | string;

  /**
   * Use the "HDR master display information" (Hdr10Metadata) settings to correct HDR metadata or to provide missing metadata. These values vary depending on the input video and must be provided by a color grader. Range is 0 to 50,000; each increment represents 0.00002 in CIE1931 color coordinate. Note that these settings are not color correction. Note that if you are creating HDR outputs inside of an HLS CMAF package, to comply with the Apple specification, you must use the following settings. Set "MP4 packaging type" (writeMp4PackagingType) to HVC1 (HVC1). Set "Profile" (H265Settings > codecProfile) to Main10/High (MAIN10_HIGH). Set "Level" (H265Settings > codecLevel) to 5 (LEVEL_5).
   */
  Hdr10Metadata?: _Hdr10Metadata;

  /**
   * Use PID (Pid) to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container.
   */
  Pid?: number;

  /**
   * Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported.
   */
  ProgramNumber?: number;

  /**
   * Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.
   */
  Rotate?:
    | "DEGREE_0"
    | "DEGREES_90"
    | "DEGREES_180"
    | "DEGREES_270"
    | "AUTO"
    | string;
}

export interface _UnmarshalledVideoSelector extends _VideoSelector {
  /**
   * Use the "HDR master display information" (Hdr10Metadata) settings to correct HDR metadata or to provide missing metadata. These values vary depending on the input video and must be provided by a color grader. Range is 0 to 50,000; each increment represents 0.00002 in CIE1931 color coordinate. Note that these settings are not color correction. Note that if you are creating HDR outputs inside of an HLS CMAF package, to comply with the Apple specification, you must use the following settings. Set "MP4 packaging type" (writeMp4PackagingType) to HVC1 (HVC1). Set "Profile" (H265Settings > codecProfile) to Main10/High (MAIN10_HIGH). Set "Level" (H265Settings > codecLevel) to 5 (LEVEL_5).
   */
  Hdr10Metadata?: _UnmarshalledHdr10Metadata;
}
