import { _UnmarshalledQualification } from "./_Qualification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetQualificationScoreOutput shape
 */
export interface GetQualificationScoreOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The Qualification data structure of the Qualification assigned to a user, including the Qualification type and the value (score). </p>
   */
  Qualification?: _UnmarshalledQualification;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
