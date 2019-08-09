/**
 * <p>Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key can specify multiple values.</p>
 */
export interface _RunCommandTarget {
  /**
   * <p>Can be either <code>tag:</code> <i>tag-key</i> or <code>InstanceIds</code>.</p>
   */
  Key: string;

  /**
   * <p>If <code>Key</code> is <code>tag:</code> <i>tag-key</i>, <code>Values</code> is a list of tag values. If <code>Key</code> is <code>InstanceIds</code>, <code>Values</code> is a list of Amazon EC2 instance IDs.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledRunCommandTarget extends _RunCommandTarget {
  /**
   * <p>If <code>Key</code> is <code>tag:</code> <i>tag-key</i>, <code>Values</code> is a list of tag values. If <code>Key</code> is <code>InstanceIds</code>, <code>Values</code> is a list of Amazon EC2 instance IDs.</p>
   */
  Values: Array<string>;
}
