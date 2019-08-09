import { _UnmarshalledUniqueProblem } from "./_UniqueProblem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a list unique problems request.</p>
 */
export interface ListUniqueProblemsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the unique problems.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>
   */
  uniqueProblems?: {
    [key in
      | "PENDING"
      | "PASSED"
      | "WARNED"
      | "FAILED"
      | "SKIPPED"
      | "ERRORED"
      | "STOPPED"
      | string]: Array<_UnmarshalledUniqueProblem>
  };

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
