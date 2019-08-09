/**
 * <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
 */
export interface _DBClusterEndpoint {
  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</p>
   */
  DBClusterEndpointResourceIdentifier?: string;

  /**
   * <p>The DNS address of the endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>modifying</code>.</p>
   */
  Status?: string;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: Array<string> | Iterable<string>;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: Array<string> | Iterable<string>;

  /**
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;
}

export interface _UnmarshalledDBClusterEndpoint extends _DBClusterEndpoint {
  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: Array<string>;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: Array<string>;
}
