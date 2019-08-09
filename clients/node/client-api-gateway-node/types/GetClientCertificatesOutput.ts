import { _UnmarshalledClientCertificate } from "./_ClientCertificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
 */
export interface GetClientCertificatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * _String shape
   */
  position?: string;

  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Array<_UnmarshalledClientCertificate>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
