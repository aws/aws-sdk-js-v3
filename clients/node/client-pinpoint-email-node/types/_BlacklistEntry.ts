/**
 * <p>An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.</p>
 */
export interface _BlacklistEntry {
  /**
   * <p>The name of the blacklist that the IP address appears on.</p>
   */
  RblName?: string;

  /**
   * <p>The time when the blacklisting event occurred, shown in Unix time format.</p>
   */
  ListingTime?: Date | string | number;

  /**
   * <p>Additional information about the blacklisting event, as provided by the blacklist maintainer.</p>
   */
  Description?: string;
}

export interface _UnmarshalledBlacklistEntry extends _BlacklistEntry {
  /**
   * <p>The time when the blacklisting event occurred, shown in Unix time format.</p>
   */
  ListingTime?: Date;
}
