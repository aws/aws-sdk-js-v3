import { _UnmarshalledApplicationDateRangeKpiResponse } from "./_ApplicationDateRangeKpiResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetApplicationDateRangeKpiOutput shape
 */
export interface GetApplicationDateRangeKpiOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.</p>
   */
  ApplicationDateRangeKpiResponse: _UnmarshalledApplicationDateRangeKpiResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
