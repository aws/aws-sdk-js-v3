import { _UnmarshalledPushSync } from "./_PushSync";
import { _UnmarshalledCognitoStreams } from "./_CognitoStreams";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the GetIdentityPoolConfiguration operation.</p>
 */
export interface GetIdentityPoolConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Options to apply to this identity pool for push synchronization.</p>
   */
  PushSync?: _UnmarshalledPushSync;

  /**
   * Options to apply to this identity pool for Amazon Cognito streams.
   */
  CognitoStreams?: _UnmarshalledCognitoStreams;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
