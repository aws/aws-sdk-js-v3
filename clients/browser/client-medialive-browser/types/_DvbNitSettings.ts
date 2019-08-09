/**
 * DVB Network Information Table (NIT)
 */
export interface _DvbNitSettings {
  /**
   * The numeric value placed in the Network Information Table (NIT).
   */
  NetworkId: number;

  /**
   * The network name text placed in the networkNameDescriptor inside the Network Information Table. Maximum length is 256 characters.
   */
  NetworkName: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;
}

export type _UnmarshalledDvbNitSettings = _DvbNitSettings;
