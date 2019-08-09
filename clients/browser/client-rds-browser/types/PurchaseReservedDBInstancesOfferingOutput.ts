import { _UnmarshalledReservedDBInstance } from "./_ReservedDBInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PurchaseReservedDBInstancesOfferingOutput shape
 */
export interface PurchaseReservedDBInstancesOfferingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions. </p>
   */
  ReservedDBInstance?: _UnmarshalledReservedDBInstance;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
