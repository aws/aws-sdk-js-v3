/**
 * <p> List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> . </p>
 */
export interface _AdditionalLimit {
  /**
   * <p> Name of Additional Limit is specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> etc. <br/> Attributes and their details: <br/> <ul> <li>MaximumNumberOfDataNodesSupported</li> This attribute will be present in Master node only to specify how much data nodes upto which given <code> <a>ESPartitionInstanceType</a> </code> can support as master node. <li>MaximumNumberOfDataNodesWithoutMasterNode</li> This attribute will be present in Data node only to specify how much data nodes of given <code> <a>ESPartitionInstanceType</a> </code> upto which you don't need any master nodes to govern them. </ul> </p>
   */
  LimitName?: string;

  /**
   * <p> Value for given <code> <a>AdditionalLimit$LimitName</a> </code> . </p>
   */
  LimitValues?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAdditionalLimit extends _AdditionalLimit {
  /**
   * <p> Value for given <code> <a>AdditionalLimit$LimitName</a> </code> . </p>
   */
  LimitValues?: Array<string>;
}
