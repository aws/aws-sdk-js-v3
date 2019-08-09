import {
  _LambdaFunctionAssociation,
  _UnmarshalledLambdaFunctionAssociation
} from "./_LambdaFunctionAssociation";

/**
 * <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p>
 */
export interface _LambdaFunctionAssociations {
  /**
   * <p>The number of Lambda function associations for this cache behavior.</p>
   */
  Quantity: number;

  /**
   * <p> <b>Optional</b>: A complex type that contains <code>LambdaFunctionAssociation</code> items for this cache behavior. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?:
    | Array<_LambdaFunctionAssociation>
    | Iterable<_LambdaFunctionAssociation>;
}

export interface _UnmarshalledLambdaFunctionAssociations
  extends _LambdaFunctionAssociations {
  /**
   * <p> <b>Optional</b>: A complex type that contains <code>LambdaFunctionAssociation</code> items for this cache behavior. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?: Array<_UnmarshalledLambdaFunctionAssociation>;
}
