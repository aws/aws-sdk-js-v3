/**
 * Use the "HDR master display information" (Hdr10Metadata) settings to correct HDR metadata or to provide missing metadata. These values vary depending on the input video and must be provided by a color grader. Range is 0 to 50,000; each increment represents 0.00002 in CIE1931 color coordinate. Note that these settings are not color correction. Note that if you are creating HDR outputs inside of an HLS CMAF package, to comply with the Apple specification, you must use the following settings. Set "MP4 packaging type" (writeMp4PackagingType) to HVC1 (HVC1). Set "Profile" (H265Settings > codecProfile) to Main10/High (MAIN10_HIGH). Set "Level" (H265Settings > codecLevel) to 5 (LEVEL_5).
 */
export interface _Hdr10Metadata {
  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  BluePrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  BluePrimaryY?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  GreenPrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  GreenPrimaryY?: number;

  /**
   * Maximum light level among all samples in the coded video sequence, in units of candelas per square meter.
   */
  MaxContentLightLevel?: number;

  /**
   * Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter.
   */
  MaxFrameAverageLightLevel?: number;

  /**
   * Nominal maximum mastering display luminance in units of of 0.0001 candelas per square meter.
   */
  MaxLuminance?: number;

  /**
   * Nominal minimum mastering display luminance in units of of 0.0001 candelas per square meter
   */
  MinLuminance?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  RedPrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  RedPrimaryY?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  WhitePointX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  WhitePointY?: number;
}

export type _UnmarshalledHdr10Metadata = _Hdr10Metadata;
