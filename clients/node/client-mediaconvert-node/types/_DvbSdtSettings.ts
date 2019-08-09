/**
 * Inserts DVB Service Description Table (NIT) at the specified table repetition interval.
 */
export interface _DvbSdtSettings {
  /**
   * Selects method of inserting SDT information into output stream.  "Follow input SDT" copies SDT information from input stream to  output stream. "Follow input SDT if present" copies SDT information from  input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT  Manually" means user will enter the SDT information. "No SDT" means output  stream will not contain SDT information.
   */
  OutputSdt?:
    | "SDT_FOLLOW"
    | "SDT_FOLLOW_IF_PRESENT"
    | "SDT_MANUAL"
    | "SDT_NONE"
    | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  SdtInterval?: number;

  /**
   * The service name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceName?: string;

  /**
   * The service provider name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceProviderName?: string;
}

export type _UnmarshalledDvbSdtSettings = _DvbSdtSettings;
