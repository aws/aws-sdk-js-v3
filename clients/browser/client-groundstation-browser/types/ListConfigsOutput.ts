import { _UnmarshalledConfigListItem } from "./_ConfigListItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ListConfigsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of <code>Config</code> items.</p>
   */
  configList?: Array<_UnmarshalledConfigListItem>;

  /**
   * <p>Next token returned in the response of a previous <code>ListConfigs</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
