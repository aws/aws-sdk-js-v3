import { _UnmarshalledDomainNameConfiguration } from "./_DomainNameConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDomainNameOutput shape
 */
export interface UpdateDomainNameOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName?: string;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: Array<_UnmarshalledDomainNameConfiguration>;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
