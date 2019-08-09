import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRateBasedRuleManagedKeysOutput shape
 */
export interface GetRateBasedRuleManagedKeysOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of IP addresses that currently are blocked by the specified <a>RateBasedRule</a>. </p>
   */
  ManagedKeys?: Array<string>;

  /**
   * <p>A null value and not currently used.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
