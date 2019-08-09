import { _UnmarshalledDomainTransferability } from "./_DomainTransferability";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The CheckDomainTransferability response includes the following elements.</p>
 */
export interface CheckDomainTransferabilityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains information about whether the specified domain can be transferred to Amazon Route 53.</p>
   */
  Transferability: _UnmarshalledDomainTransferability;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
