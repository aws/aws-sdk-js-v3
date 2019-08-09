import { _UnmarshalledInstanceInfo } from "./_InstanceInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Represents the output of a GetOnPremisesInstance operation. </p>
 */
export interface GetOnPremisesInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Information about the on-premises instance. </p>
   */
  instanceInfo?: _UnmarshalledInstanceInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
