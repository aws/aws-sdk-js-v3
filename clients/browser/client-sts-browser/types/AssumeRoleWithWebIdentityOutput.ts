import { _UnmarshalledCredentials } from "./_Credentials";
import { _UnmarshalledAssumedRoleUser } from "./_AssumedRoleUser";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary AWS credentials that can be used to make AWS requests. </p>
 */
export interface AssumeRoleWithWebIdentityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The temporary security credentials, which include an access key ID, a secret access key, and a security token.</p> <note> <p>The size of the security token that STS API operations return is not fixed. We strongly recommend that you make no assumptions about the maximum size.</p> </note>
   */
  Credentials?: _UnmarshalledCredentials;

  /**
   * <p>The unique user identifier that is returned by the identity provider. This identifier is associated with the <code>WebIdentityToken</code> that was submitted with the <code>AssumeRoleWithWebIdentity</code> call. The identifier is typically unique to the user and the application that acquired the <code>WebIdentityToken</code> (pairwise identifier). For OpenID Connect ID tokens, this field contains the value returned by the identity provider as the token's <code>sub</code> (Subject) claim. </p>
   */
  SubjectFromWebIdentityToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and the assumed role ID, which are identifiers that you can use to refer to the resulting temporary security credentials. For example, you can reference these credentials as a principal in a resource-based policy by using the ARN or assumed role ID. The ARN and ID include the <code>RoleSessionName</code> that you specified when you called <code>AssumeRole</code>. </p>
   */
  AssumedRoleUser?: _UnmarshalledAssumedRoleUser;

  /**
   * <p>A percentage value that indicates the size of the policy in packed form. The service rejects any policy with a packed size greater than 100 percent, which means the policy exceeded the allowed space.</p>
   */
  PackedPolicySize?: number;

  /**
   * <p> The issuing authority of the web identity token presented. For OpenID Connect ID tokens, this contains the value of the <code>iss</code> field. For OAuth 2.0 access tokens, this contains the value of the <code>ProviderId</code> parameter that was passed in the <code>AssumeRoleWithWebIdentity</code> request.</p>
   */
  Provider?: string;

  /**
   * <p>The intended audience (also known as client ID) of the web identity token. This is traditionally the client identifier issued to the application that requested the web identity token.</p>
   */
  Audience?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
