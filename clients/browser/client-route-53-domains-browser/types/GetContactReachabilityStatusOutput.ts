import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetContactReachabilityStatusOutput shape
 */
export interface GetContactReachabilityStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The domain name for which you requested the reachability status.</p>
   */
  domainName?: string;

  /**
   * <p>Whether the registrant contact has responded. Values include the following:</p> <dl> <dt>PENDING</dt> <dd> <p>We sent the confirmation email and haven't received a response yet.</p> </dd> <dt>DONE</dt> <dd> <p>We sent the email and got confirmation from the registrant contact.</p> </dd> <dt>EXPIRED</dt> <dd> <p>The time limit expired before the registrant contact responded.</p> </dd> </dl>
   */
  status?: "PENDING" | "DONE" | "EXPIRED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
