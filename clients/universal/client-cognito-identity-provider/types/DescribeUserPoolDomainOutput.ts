import { _UnmarshalledDomainDescriptionType } from "./_DomainDescriptionType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserPoolDomainOutput shape
 */
export interface DescribeUserPoolDomainOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A domain description object containing information about the domain.</p>
   */
  DomainDescription?: _UnmarshalledDomainDescriptionType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
