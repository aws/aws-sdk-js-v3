/**
 * Demographic information about the endpoint.
 */
export interface _EndpointDemographic {
  /**
   * The version of the application associated with the endpoint.
   */
  AppVersion?: string;

  /**
   * The endpoint locale in the following format: The ISO 639-1 alpha-2 code, followed by an underscore, followed by an ISO 3166-1 alpha-2 value.
   *
   */
  Locale?: string;

  /**
   * The manufacturer of the endpoint device, such as Apple or Samsung.
   */
  Make?: string;

  /**
   * The model name or number of the endpoint device, such as iPhone.
   */
  Model?: string;

  /**
   * The model version of the endpoint device.
   */
  ModelVersion?: string;

  /**
   * The platform of the endpoint device, such as iOS or Android.
   */
  Platform?: string;

  /**
   * The platform version of the endpoint device.
   */
  PlatformVersion?: string;

  /**
   * The timezone of the endpoint. Specified as a tz database value, such as Americas/Los_Angeles.
   */
  Timezone?: string;
}

export type _UnmarshalledEndpointDemographic = _EndpointDemographic;
