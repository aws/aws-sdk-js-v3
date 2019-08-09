/**
 * Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element.
 */
export interface _Scte35DeliveryRestrictions {
  /**
   * Corresponds to SCTE-35 archive_allowed_flag.
   */
  ArchiveAllowedFlag: "ARCHIVE_NOT_ALLOWED" | "ARCHIVE_ALLOWED" | string;

  /**
   * Corresponds to SCTE-35 device_restrictions parameter.
   */
  DeviceRestrictions:
    | "NONE"
    | "RESTRICT_GROUP0"
    | "RESTRICT_GROUP1"
    | "RESTRICT_GROUP2"
    | string;

  /**
   * Corresponds to SCTE-35 no_regional_blackout_flag parameter.
   */
  NoRegionalBlackoutFlag: "REGIONAL_BLACKOUT" | "NO_REGIONAL_BLACKOUT" | string;

  /**
   * Corresponds to SCTE-35 web_delivery_allowed_flag parameter.
   */
  WebDeliveryAllowedFlag:
    | "WEB_DELIVERY_NOT_ALLOWED"
    | "WEB_DELIVERY_ALLOWED"
    | string;
}

export type _UnmarshalledScte35DeliveryRestrictions = _Scte35DeliveryRestrictions;
