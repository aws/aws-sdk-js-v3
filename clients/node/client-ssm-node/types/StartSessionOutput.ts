import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartSessionOutput shape
 */
export interface StartSessionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>An encrypted token value containing session and caller information. Used to authenticate the connection to the instance.</p>
   */
  TokenValue?: string;

  /**
   * <p>A URL back to SSM Agent on the instance that the Session Manager client uses to send commands and receive output from the instance. Format: <code>wss://ssmmessages.<b>region</b>.amazonaws.com/v1/data-channel/<b>session-id</b>?stream=(input|output)</code> </p> <p> <b>region</b> represents the Region identifier for an AWS Region supported by AWS Systems Manager, such as <code>us-east-2</code> for the US East (Ohio) Region. For a list of supported <b>region</b> values, see the <b>Region</b> column in the <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#ssm_region">AWS Systems Manager table of regions and endpoints</a> in the <i>AWS General Reference</i>.</p> <p> <b>session-id</b> represents the ID of a Session Manager session, such as <code>1a2b3c4dEXAMPLE</code>.</p>
   */
  StreamUrl?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
