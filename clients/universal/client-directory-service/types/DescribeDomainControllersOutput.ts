import { _UnmarshalledDomainController } from "./_DomainController";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDomainControllersOutput shape
 */
export interface DescribeDomainControllersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of the <a>DomainController</a> objects that were retrieved.</p>
   */
  DomainControllers?: Array<_UnmarshalledDomainController>;

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <a>DescribeDomainControllers</a> retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
