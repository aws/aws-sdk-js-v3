import { _RemixSettings, _UnmarshalledRemixSettings } from "./_RemixSettings";

/**
 * Selector for Audio
 */
export interface _AudioSelector {
  /**
   * Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code
   */
  CustomLanguageCode?: string;

  /**
   * Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.
   */
  DefaultSelection?: "DEFAULT" | "NOT_DEFAULT" | string;

  /**
   * Specifies audio data from an external file source.
   */
  ExternalAudioFileInput?: string;

  /**
   * Selects a specific language code from within an audio source.
   */
  LanguageCode?:
    | "ENG"
    | "SPA"
    | "FRA"
    | "DEU"
    | "GER"
    | "ZHO"
    | "ARA"
    | "HIN"
    | "JPN"
    | "RUS"
    | "POR"
    | "ITA"
    | "URD"
    | "VIE"
    | "KOR"
    | "PAN"
    | "ABK"
    | "AAR"
    | "AFR"
    | "AKA"
    | "SQI"
    | "AMH"
    | "ARG"
    | "HYE"
    | "ASM"
    | "AVA"
    | "AVE"
    | "AYM"
    | "AZE"
    | "BAM"
    | "BAK"
    | "EUS"
    | "BEL"
    | "BEN"
    | "BIH"
    | "BIS"
    | "BOS"
    | "BRE"
    | "BUL"
    | "MYA"
    | "CAT"
    | "KHM"
    | "CHA"
    | "CHE"
    | "NYA"
    | "CHU"
    | "CHV"
    | "COR"
    | "COS"
    | "CRE"
    | "HRV"
    | "CES"
    | "DAN"
    | "DIV"
    | "NLD"
    | "DZO"
    | "ENM"
    | "EPO"
    | "EST"
    | "EWE"
    | "FAO"
    | "FIJ"
    | "FIN"
    | "FRM"
    | "FUL"
    | "GLA"
    | "GLG"
    | "LUG"
    | "KAT"
    | "ELL"
    | "GRN"
    | "GUJ"
    | "HAT"
    | "HAU"
    | "HEB"
    | "HER"
    | "HMO"
    | "HUN"
    | "ISL"
    | "IDO"
    | "IBO"
    | "IND"
    | "INA"
    | "ILE"
    | "IKU"
    | "IPK"
    | "GLE"
    | "JAV"
    | "KAL"
    | "KAN"
    | "KAU"
    | "KAS"
    | "KAZ"
    | "KIK"
    | "KIN"
    | "KIR"
    | "KOM"
    | "KON"
    | "KUA"
    | "KUR"
    | "LAO"
    | "LAT"
    | "LAV"
    | "LIM"
    | "LIN"
    | "LIT"
    | "LUB"
    | "LTZ"
    | "MKD"
    | "MLG"
    | "MSA"
    | "MAL"
    | "MLT"
    | "GLV"
    | "MRI"
    | "MAR"
    | "MAH"
    | "MON"
    | "NAU"
    | "NAV"
    | "NDE"
    | "NBL"
    | "NDO"
    | "NEP"
    | "SME"
    | "NOR"
    | "NOB"
    | "NNO"
    | "OCI"
    | "OJI"
    | "ORI"
    | "ORM"
    | "OSS"
    | "PLI"
    | "FAS"
    | "POL"
    | "PUS"
    | "QUE"
    | "QAA"
    | "RON"
    | "ROH"
    | "RUN"
    | "SMO"
    | "SAG"
    | "SAN"
    | "SRD"
    | "SRB"
    | "SNA"
    | "III"
    | "SND"
    | "SIN"
    | "SLK"
    | "SLV"
    | "SOM"
    | "SOT"
    | "SUN"
    | "SWA"
    | "SSW"
    | "SWE"
    | "TGL"
    | "TAH"
    | "TGK"
    | "TAM"
    | "TAT"
    | "TEL"
    | "THA"
    | "BOD"
    | "TIR"
    | "TON"
    | "TSO"
    | "TSN"
    | "TUR"
    | "TUK"
    | "TWI"
    | "UIG"
    | "UKR"
    | "UZB"
    | "VEN"
    | "VOL"
    | "WLN"
    | "CYM"
    | "FRY"
    | "WOL"
    | "XHO"
    | "YID"
    | "YOR"
    | "ZHA"
    | "ZUL"
    | "ORJ"
    | "QPC"
    | "TNG"
    | string;

  /**
   * Specifies a time delta in milliseconds to offset the audio from the input video.
   */
  Offset?: number;

  /**
   * Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101).
   */
  Pids?: Array<number> | Iterable<number>;

  /**
   * Use this setting for input streams that contain Dolby E, to have the service extract specific program data from the track. To select multiple programs, create multiple selectors with the same Track and different Program numbers. In the console, this setting is visible when you set Selector type to Track. Choose the program number from the dropdown list. If you are sending a JSON file, provide the program ID, which is part of the audio metadata. If your input file has incorrect metadata, you can choose All channels instead of a program number to have the service ignore the program IDs and include all the programs in the track.
   */
  ProgramSelection?: number;

  /**
   * Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other.
   */
  RemixSettings?: _RemixSettings;

  /**
   * Specifies the type of the audio selector.
   */
  SelectorType?: "PID" | "TRACK" | "LANGUAGE_CODE" | string;

  /**
   * Identify a track from the input audio to include in this selector by entering the track index number. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For examle, type "1,2,3" to include tracks 1 through 3. Specifying directly in your JSON job file, provide the track numbers in an array. For example, "tracks": [1,2,3].
   */
  Tracks?: Array<number> | Iterable<number>;
}

export interface _UnmarshalledAudioSelector extends _AudioSelector {
  /**
   * Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101).
   */
  Pids?: Array<number>;

  /**
   * Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other.
   */
  RemixSettings?: _UnmarshalledRemixSettings;

  /**
   * Identify a track from the input audio to include in this selector by entering the track index number. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For examle, type "1,2,3" to include tracks 1 through 3. Specifying directly in your JSON job file, provide the track numbers in an array. For example, "tracks": [1,2,3].
   */
  Tracks?: Array<number>;
}
