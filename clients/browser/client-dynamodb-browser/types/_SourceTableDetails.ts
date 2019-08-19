import {
  _KeySchemaElement,
  _UnmarshalledKeySchemaElement
} from "./_KeySchemaElement";
import {
  _ProvisionedThroughput,
  _UnmarshalledProvisionedThroughput
} from "./_ProvisionedThroughput";

/**
 * <p>Contains the details of the table when the backup was created. </p>
 */
export interface _SourceTableDetails {
  /**
   * <p>The name of the table for which the backup was created. </p>
   */
  TableName: string;

  /**
   * <p>Unique identifier for the table for which the backup was created. </p>
   */
  TableId: string;

  /**
   * <p>ARN of the table for which backup was created. </p>
   */
  TableArn?: string;

  /**
   * <p>Size of the table in bytes. Please note this is an approximate value.</p>
   */
  TableSizeBytes?: number;

  /**
   * <p>Schema of the table. </p>
   */
  KeySchema: Array<_KeySchemaElement> | Iterable<_KeySchemaElement>;

  /**
   * <p>Time when the source table was created. </p>
   */
  TableCreationDateTime: Date | string | number;

  /**
   * <p>Read IOPs and Write IOPS on the table when the backup was created.</p>
   */
  ProvisionedThroughput: _ProvisionedThroughput;

  /**
   * <p>Number of items in the table. Please note this is an approximate value. </p>
   */
  ItemCount?: number;

  /**
   * <p>Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.</p> <ul> <li> <p> <code>PROVISIONED</code> - Sets the read/write capacity mode to <code>PROVISIONED</code>. We recommend using <code>PROVISIONED</code> for predictable workloads.</p> </li> <li> <p> <code>PAY_PER_REQUEST</code> - Sets the read/write capacity mode to <code>PAY_PER_REQUEST</code>. We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. </p> </li> </ul>
   */
  BillingMode?: "PROVISIONED" | "PAY_PER_REQUEST" | string;
}

export interface _UnmarshalledSourceTableDetails extends _SourceTableDetails {
  /**
   * <p>Schema of the table. </p>
   */
  KeySchema: Array<_UnmarshalledKeySchemaElement>;

  /**
   * <p>Time when the source table was created. </p>
   */
  TableCreationDateTime: Date;

  /**
   * <p>Read IOPs and Write IOPS on the table when the backup was created.</p>
   */
  ProvisionedThroughput: _UnmarshalledProvisionedThroughput;
}
