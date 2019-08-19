import { _UnmarshalledDomainInfo } from "./_DomainInfo";
import { _UnmarshalledDomainConfiguration } from "./_DomainConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains details of a domain.</p>
 */
export interface DescribeDomainOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The basic information about a domain, such as its name, status, and description.</p>
   */
  domainInfo: _UnmarshalledDomainInfo;

  /**
   * <p>The domain configuration. Currently, this includes only the domain's retention period.</p>
   */
  configuration: _UnmarshalledDomainConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
