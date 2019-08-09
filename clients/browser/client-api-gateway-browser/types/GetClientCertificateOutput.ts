import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p> <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
 */
export interface GetClientCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the client certificate.</p>
   */
  clientCertificateId?: string;

  /**
   * <p>The description of the client certificate.</p>
   */
  description?: string;

  /**
   * <p>The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .</p>
   */
  pemEncodedCertificate?: string;

  /**
   * <p>The timestamp when the client certificate was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The timestamp when the client certificate will expire.</p>
   */
  expirationDate?: Date;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
