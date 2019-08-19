import {
  _UnsuccessfulInstanceCreditSpecificationItemError,
  _UnmarshalledUnsuccessfulInstanceCreditSpecificationItemError
} from "./_UnsuccessfulInstanceCreditSpecificationItemError";

/**
 * <p>Describes the T2 or T3 instance whose credit option for CPU usage was not modified.</p>
 */
export interface _UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The applicable error for the T2 or T3 instance whose credit option for CPU usage was not modified.</p>
   */
  Error?: _UnsuccessfulInstanceCreditSpecificationItemError;
}

export interface _UnmarshalledUnsuccessfulInstanceCreditSpecificationItem
  extends _UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The applicable error for the T2 or T3 instance whose credit option for CPU usage was not modified.</p>
   */
  Error?: _UnmarshalledUnsuccessfulInstanceCreditSpecificationItemError;
}
