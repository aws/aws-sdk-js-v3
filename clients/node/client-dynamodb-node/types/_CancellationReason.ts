import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>An ordered list of errors for each item in the request which caused the transaction to get cancelled. The values of the list are ordered according to the ordering of the <code>TransactWriteItems</code> request parameter. If no error occurred for the associated item an error with a Null code and Null message will be present. </p>
 */
export interface _CancellationReason {
  /**
   * <p>Item in the request which caused the transaction to get cancelled.</p>
   */
  Item?:
    | { [key: string]: _AttributeValue }
    | Iterable<[string, _AttributeValue]>;

  /**
   * <p>Status code for the result of the cancelled transaction.</p>
   */
  Code?: string;

  /**
   * <p>Cancellation reason message description.</p>
   */
  Message?: string;
}

export interface _UnmarshalledCancellationReason extends _CancellationReason {
  /**
   * <p>Item in the request which caused the transaction to get cancelled.</p>
   */
  Item?: { [key: string]: _UnmarshalledAttributeValue };
}
