import { _UnmarshalledSuccessfulInstanceCreditSpecificationItem } from "./_SuccessfulInstanceCreditSpecificationItem";
import { _UnmarshalledUnsuccessfulInstanceCreditSpecificationItem } from "./_UnsuccessfulInstanceCreditSpecificationItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyInstanceCreditSpecificationOutput shape
 */
export interface ModifyInstanceCreditSpecificationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the instances whose credit option for CPU usage was successfully modified.</p>
   */
  SuccessfulInstanceCreditSpecifications?: Array<
    _UnmarshalledSuccessfulInstanceCreditSpecificationItem
  >;

  /**
   * <p>Information about the instances whose credit option for CPU usage was not modified.</p>
   */
  UnsuccessfulInstanceCreditSpecifications?: Array<
    _UnmarshalledUnsuccessfulInstanceCreditSpecificationItem
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
