/**
 * <p>Details about the threat intel related to a finding.</p>
 */
export interface _ThreatIntelIndicator {
  /**
   * <p>The type of a threat intel indicator.</p>
   */
  Type?:
    | "DOMAIN"
    | "EMAIL_ADDRESS"
    | "HASH_MD5"
    | "HASH_SHA1"
    | "HASH_SHA256"
    | "HASH_SHA512"
    | "IPV4_ADDRESS"
    | "IPV6_ADDRESS"
    | "MUTEX"
    | "PROCESS"
    | "URL"
    | string;

  /**
   * <p>The value of a threat intel indicator.</p>
   */
  Value?: string;

  /**
   * <p>The category of a threat intel indicator.</p>
   */
  Category?:
    | "BACKDOOR"
    | "CARD_STEALER"
    | "COMMAND_AND_CONTROL"
    | "DROP_SITE"
    | "EXPLOIT_SITE"
    | "KEYLOGGER"
    | string;

  /**
   * <p>The date and time when the most recent instance of a threat intel indicator was observed.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>The source of the threat intel indicator.</p>
   */
  Source?: string;

  /**
   * <p>The URL to the page or site where you can get more information about the threat intel indicator.</p>
   */
  SourceUrl?: string;
}

export type _UnmarshalledThreatIntelIndicator = _ThreatIntelIndicator;
