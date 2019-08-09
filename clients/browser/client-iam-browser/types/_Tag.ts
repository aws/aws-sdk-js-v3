/**
 * <p>A structure that represents user-provided metadata that can be associated with a resource such as an IAM user or role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
 */
export interface _Tag {
  /**
   * <p>The key name that can be used to look up or retrieve the associated value. For example, <code>Department</code> or <code>Cost Center</code> are common choices.</p>
   */
  Key: string;

  /**
   * <p>The value associated with this tag. For example, tags with a key name of <code>Department</code> could have values such as <code>Human Resources</code>, <code>Accounting</code>, and <code>Support</code>. Tags with a key name of <code>Cost Center</code> might have values that consist of the number associated with the different cost centers in your company. Typically, many resources have tags with the same key name but with different values.</p> <note> <p>AWS always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </note>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
