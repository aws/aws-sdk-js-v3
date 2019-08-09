import { _City, _UnmarshalledCity } from "./_City";
import { _Country, _UnmarshalledCountry } from "./_Country";
import { _GeoLocation, _UnmarshalledGeoLocation } from "./_GeoLocation";
import { _Organization, _UnmarshalledOrganization } from "./_Organization";

/**
 * _RemoteIpDetails shape
 */
export interface _RemoteIpDetails {
  /**
   * <p>City information of the remote IP address.</p>
   */
  City?: _City;

  /**
   * <p>Country code of the remote IP address.</p>
   */
  Country?: _Country;

  /**
   * <p>Location information of the remote IP address.</p>
   */
  GeoLocation?: _GeoLocation;

  /**
   * <p>IPV4 remote address of the connection.</p>
   */
  IpAddressV4?: string;

  /**
   * <p>ISP Organization information of the remote IP address.</p>
   */
  Organization?: _Organization;
}

export interface _UnmarshalledRemoteIpDetails extends _RemoteIpDetails {
  /**
   * <p>City information of the remote IP address.</p>
   */
  City?: _UnmarshalledCity;

  /**
   * <p>Country code of the remote IP address.</p>
   */
  Country?: _UnmarshalledCountry;

  /**
   * <p>Location information of the remote IP address.</p>
   */
  GeoLocation?: _UnmarshalledGeoLocation;

  /**
   * <p>ISP Organization information of the remote IP address.</p>
   */
  Organization?: _UnmarshalledOrganization;
}
