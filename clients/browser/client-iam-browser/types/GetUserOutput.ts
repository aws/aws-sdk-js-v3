import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetUser</a> request. </p>
 */
export interface GetUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing details about the IAM user.</p> <important> <p>Due to a service issue, password last used data does not include password use from May 3, 2018 22:50 PDT to May 23, 2018 14:08 PDT. This affects <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html">last sign-in</a> dates shown in the IAM console and password last used dates in the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">IAM credential report</a>, and returned by this GetUser API. If users signed in during the affected time, the password last used date that is returned is the date the user last signed in before May 3, 2018. For users that signed in after May 23, 2018 14:08 PDT, the returned password last used date is accurate.</p> <p>You can use password last used information to identify unused credentials for deletion. For example, you might delete users who did not sign in to AWS in the last 90 days. In cases like this, we recommend that you adjust your evaluation window to include dates after May 23, 2018. Alternatively, if your users use access keys to access AWS programmatically you can refer to access key last used information because it is accurate for all dates. </p> </important>
   */
  User: _UnmarshalledUser;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
