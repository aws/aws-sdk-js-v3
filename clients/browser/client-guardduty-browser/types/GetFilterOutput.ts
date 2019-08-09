import { _UnmarshalledFindingCriteria } from "./_FindingCriteria";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFilterOutput shape
 */
export interface GetFilterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the filter.</p>
   */
  Name: string;

  /**
   * <p>The description of the filter.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action: "NOOP" | "ARCHIVE" | string;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.</p>
   */
  Rank?: number;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   */
  FindingCriteria: _UnmarshalledFindingCriteria;

  /**
   * <p>The tags of the filter resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
