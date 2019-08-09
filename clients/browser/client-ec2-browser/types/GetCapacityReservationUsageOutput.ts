import { _UnmarshalledInstanceUsage } from "./_InstanceUsage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCapacityReservationUsageOutput shape
 */
export interface GetCapacityReservationUsageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * _String shape
   */
  NextToken?: string;

  /**
   * _String shape
   */
  CapacityReservationId?: string;

  /**
   * _String shape
   */
  InstanceType?: string;

  /**
   * _Integer shape
   */
  TotalInstanceCount?: number;

  /**
   * _Integer shape
   */
  AvailableInstanceCount?: number;

  /**
   * _CapacityReservationState shape
   */
  State?: "active" | "expired" | "cancelled" | "pending" | "failed" | string;

  /**
   * _InstanceUsageSet shape
   */
  InstanceUsages?: Array<_UnmarshalledInstanceUsage>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
