import { _UnmarshalledInstanceInfo } from "./_InstanceInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a BatchGetOnPremisesInstances operation.</p>
 */
export interface BatchGetOnPremisesInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the on-premises instances.</p>
   */
  instanceInfos?: Array<_UnmarshalledInstanceInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
