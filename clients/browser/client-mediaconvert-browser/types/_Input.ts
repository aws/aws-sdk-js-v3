import {
  _AudioSelectorGroup,
  _UnmarshalledAudioSelectorGroup
} from "./_AudioSelectorGroup";
import { _AudioSelector, _UnmarshalledAudioSelector } from "./_AudioSelector";
import {
  _CaptionSelector,
  _UnmarshalledCaptionSelector
} from "./_CaptionSelector";
import { _Rectangle, _UnmarshalledRectangle } from "./_Rectangle";
import {
  _InputDecryptionSettings,
  _UnmarshalledInputDecryptionSettings
} from "./_InputDecryptionSettings";
import { _ImageInserter, _UnmarshalledImageInserter } from "./_ImageInserter";
import { _InputClipping, _UnmarshalledInputClipping } from "./_InputClipping";
import { _VideoSelector, _UnmarshalledVideoSelector } from "./_VideoSelector";

/**
 * Specifies media input
 */
export interface _Input {
  /**
   * Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See "Audio Selector Group":#inputs-audio_selector_group for more information.
   */
  AudioSelectorGroups?:
    | { [key: string]: _AudioSelectorGroup }
    | Iterable<[string, _AudioSelectorGroup]>;

  /**
   * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use mutiple Audio selectors per input.
   */
  AudioSelectors?:
    | { [key: string]: _AudioSelector }
    | Iterable<[string, _AudioSelector]>;

  /**
   * Use Captions selectors (CaptionSelectors) to specify the captions data from the input that you will use in your outputs. You can use mutiple captions selectors per input.
   */
  CaptionSelectors?:
    | { [key: string]: _CaptionSelector }
    | Iterable<[string, _CaptionSelector]>;

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
   */
  Crop?: _Rectangle;

  /**
   * Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manaully controllable for MPEG2 and uncompressed video inputs.
   */
  DeblockFilter?: "ENABLED" | "DISABLED" | string;

  /**
   * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
   */
  DecryptionSettings?: _InputDecryptionSettings;

  /**
   * Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   */
  DenoiseFilter?: "ENABLED" | "DISABLED" | string;

  /**
   * Specify the source file for your transcoding job. You can use multiple inputs in a single job. The service concatenates these inputs, in the order that you specify them in the job, to create the outputs. If your input format is IMF, specify your input by providing the path to your CPL. For example, "s3://bucket/vf/cpl.xml". If the CPL is in an incomplete IMP, make sure to use *Supplemental IMPs* (SupplementalImps) to specify any supplemental IMPs that contain assets referenced by the CPL.
   */
  FileInput?: string;

  /**
   * Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type.
   */
  FilterEnable?: "AUTO" | "DISABLE" | "FORCE" | string;

  /**
   * Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0.
   */
  FilterStrength?: number;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   */
  ImageInserter?: _ImageInserter;

  /**
   * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   */
  InputClippings?: Array<_InputClipping> | Iterable<_InputClipping>;

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
   */
  Position?: _Rectangle;

  /**
   * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   */
  ProgramNumber?: number;

  /**
   * Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.
   */
  PsiControl?: "IGNORE_PSI" | "USE_PSI" | string;

  /**
   * Provide a list of any necessary supplemental IMPs. You need supplemental IMPs if the CPL that you're using for your input is in an incomplete IMP. Specify either the supplemental IMP directories with a trailing slash or the ASSETMAP.xml files. For example ["s3://bucket/ov/", "s3://bucket/vf2/ASSETMAP.xml"]. You don't need to specify the IMP that contains your input CPL, because the service automatically detects it.
   */
  SupplementalImps?: Array<string> | Iterable<string>;

  /**
   * Timecode source under input settings (InputTimecodeSource) only affects the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Use this setting to specify whether the service counts frames by timecodes embedded in the video (EMBEDDED) or by starting the first frame at zero (ZEROBASED). In both cases, the timecode format is HH:MM:SS:FF or HH:MM:SS;FF, where FF is the frame number. Only set this to EMBEDDED if your source video has embedded timecodes.
   */
  TimecodeSource?: "EMBEDDED" | "ZEROBASED" | "SPECIFIEDSTART" | string;

  /**
   * Selector for video.
   */
  VideoSelector?: _VideoSelector;
}

export interface _UnmarshalledInput extends _Input {
  /**
   * Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See "Audio Selector Group":#inputs-audio_selector_group for more information.
   */
  AudioSelectorGroups?: { [key: string]: _UnmarshalledAudioSelectorGroup };

  /**
   * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use mutiple Audio selectors per input.
   */
  AudioSelectors?: { [key: string]: _UnmarshalledAudioSelector };

  /**
   * Use Captions selectors (CaptionSelectors) to specify the captions data from the input that you will use in your outputs. You can use mutiple captions selectors per input.
   */
  CaptionSelectors?: { [key: string]: _UnmarshalledCaptionSelector };

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
   */
  Crop?: _UnmarshalledRectangle;

  /**
   * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
   */
  DecryptionSettings?: _UnmarshalledInputDecryptionSettings;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   */
  ImageInserter?: _UnmarshalledImageInserter;

  /**
   * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   */
  InputClippings?: Array<_UnmarshalledInputClipping>;

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
   */
  Position?: _UnmarshalledRectangle;

  /**
   * Provide a list of any necessary supplemental IMPs. You need supplemental IMPs if the CPL that you're using for your input is in an incomplete IMP. Specify either the supplemental IMP directories with a trailing slash or the ASSETMAP.xml files. For example ["s3://bucket/ov/", "s3://bucket/vf2/ASSETMAP.xml"]. You don't need to specify the IMP that contains your input CPL, because the service automatically detects it.
   */
  SupplementalImps?: Array<string>;

  /**
   * Selector for video.
   */
  VideoSelector?: _UnmarshalledVideoSelector;
}
