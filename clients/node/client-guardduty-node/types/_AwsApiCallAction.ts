import { _DomainDetails, _UnmarshalledDomainDetails } from "./_DomainDetails";
import {
  _RemoteIpDetails,
  _UnmarshalledRemoteIpDetails
} from "./_RemoteIpDetails";

/**
 * _AwsApiCallAction shape
 */
export interface _AwsApiCallAction {
  /**
   * <p>AWS API name.</p>
   */
  Api?: string;

  /**
   * <p>AWS API caller type.</p>
   */
  CallerType?: string;

  /**
   * <p>Domain information for the AWS API call.</p>
   */
  DomainDetails?: _DomainDetails;

  /**
   * <p>Remote IP information of the connection.</p>
   */
  RemoteIpDetails?: _RemoteIpDetails;

  /**
   * <p>AWS service name whose API was invoked.</p>
   */
  ServiceName?: string;
}

export interface _UnmarshalledAwsApiCallAction extends _AwsApiCallAction {
  /**
   * <p>Domain information for the AWS API call.</p>
   */
  DomainDetails?: _UnmarshalledDomainDetails;

  /**
   * <p>Remote IP information of the connection.</p>
   */
  RemoteIpDetails?: _UnmarshalledRemoteIpDetails;
}
