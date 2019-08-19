import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).</p>
 */
export interface InvalidProtocolSettings
  extends __ServiceException__<_InvalidProtocolSettingsDetails> {
  name: "InvalidProtocolSettings";
}

export interface _InvalidProtocolSettingsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
