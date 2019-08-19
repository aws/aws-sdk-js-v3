import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeOrderableDBInstanceOptionsInput {
  /**
   * <p>The name of the engine to retrieve DB instance options for.</p>
   */
  Engine: string;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.</p>
   */
  LicenseModel?: string;

  /**
   * <p>A value that indicates whether to show only VPC or non-VPC offerings.</p>
   */
  Vpc?: boolean;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>
   */
  Marker?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
