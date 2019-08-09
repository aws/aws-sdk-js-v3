import { _UnmarshalledThirdPartyJobDetails } from "./_ThirdPartyJobDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>GetThirdPartyJobDetails</code> action.</p>
 */
export interface GetThirdPartyJobDetailsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the job, including any protected values defined for the job.</p>
   */
  jobDetails?: _UnmarshalledThirdPartyJobDetails;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
