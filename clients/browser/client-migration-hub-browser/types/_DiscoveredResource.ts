/**
 * <p>Object representing the on-premises resource being migrated.</p>
 */
export interface _DiscoveredResource {
  /**
   * <p>The configurationId in ADS that uniquely identifies the on-premise resource.</p>
   */
  ConfigurationId: string;

  /**
   * <p>A description that can be free-form text to record additional detail about the discovered resource for clarity or later reference.</p>
   */
  Description?: string;
}

export type _UnmarshalledDiscoveredResource = _DiscoveredResource;
