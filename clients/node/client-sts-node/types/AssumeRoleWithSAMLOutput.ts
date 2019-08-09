import { _UnmarshalledCredentials } from "./_Credentials";
import { _UnmarshalledAssumedRoleUser } from "./_AssumedRoleUser";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary AWS credentials that can be used to make AWS requests. </p>
 */
export interface AssumeRoleWithSAMLOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The temporary security credentials, which include an access key ID, a secret access key, and a security (or session) token.</p> <note> <p>The size of the security token that STS API operations return is not fixed. We strongly recommend that you make no assumptions about the maximum size.</p> </note>
   */
  Credentials?: _UnmarshalledCredentials;

  /**
   * <p>The identifiers for the temporary security credentials that the operation returns.</p>
   */
  AssumedRoleUser?: _UnmarshalledAssumedRoleUser;

  /**
   * <p>A percentage value that indicates the size of the policy in packed form. The service rejects any policy with a packed size greater than 100 percent, which means the policy exceeded the allowed space.</p>
   */
  PackedPolicySize?: number;

  /**
   * <p>The value of the <code>NameID</code> element in the <code>Subject</code> element of the SAML assertion.</p>
   */
  Subject?: string;

  /**
   * <p> The format of the name ID, as defined by the <code>Format</code> attribute in the <code>NameID</code> element of the SAML assertion. Typical examples of the format are <code>transient</code> or <code>persistent</code>. </p> <p> If the format includes the prefix <code>urn:oasis:names:tc:SAML:2.0:nameid-format</code>, that prefix is removed. For example, <code>urn:oasis:names:tc:SAML:2.0:nameid-format:transient</code> is returned as <code>transient</code>. If the format includes any other prefix, the format is returned with no modifications.</p>
   */
  SubjectType?: string;

  /**
   * <p>The value of the <code>Issuer</code> element of the SAML assertion.</p>
   */
  Issuer?: string;

  /**
   * <p> The value of the <code>Recipient</code> attribute of the <code>SubjectConfirmationData</code> element of the SAML assertion. </p>
   */
  Audience?: string;

  /**
   * <p>A hash value based on the concatenation of the <code>Issuer</code> response value, the AWS account ID, and the friendly name (the last part of the ARN) of the SAML provider in IAM. The combination of <code>NameQualifier</code> and <code>Subject</code> can be used to uniquely identify a federated user. </p> <p>The following pseudocode shows how the hash value is calculated:</p> <p> <code>BASE64 ( SHA1 ( "https://example.com/saml" + "123456789012" + "/MySAMLIdP" ) )</code> </p>
   */
  NameQualifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
