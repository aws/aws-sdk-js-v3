/**
 * <p>Specifies demographic information about an endpoint, such as the applicable time zone and platform.</p>
 */
export interface _EndpointDemographic {
  /**
   * <p>The version of the app that's associated with the endpoint.</p>
   */
  AppVersion?: string;

  /**
   * <p>The locale of the endpoint, in the following format: the ISO 639-1 alpha-2 code, followed by an underscore (_), followed by an ISO 3166-1 alpha-2 value.</p>
   */
  Locale?: string;

  /**
   * <p>The manufacturer of the endpoint device, such as Apple or Samsung.</p>
   */
  Make?: string;

  /**
   * <p>The model name or number of the endpoint device, such as iPhone.</p>
   */
  Model?: string;

  /**
   * <p>The model version of the endpoint device.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The platform of the endpoint device, such as iOS or Android.</p>
   */
  Platform?: string;

  /**
   * <p>The platform version of the endpoint device.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>The time zone of the endpoint, specified as a tz database name value, such as America/Los_Angeles.</p>
   */
  Timezone?: string;
}

export type _UnmarshalledEndpointDemographic = _EndpointDemographic;
