import {
  _ByteMatchTuple,
  _UnmarshalledByteMatchTuple
} from "./_ByteMatchTuple";

/**
 * <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p>
 */
export interface _ByteMatchSetUpdate {
  /**
   * <p>Specifies whether to insert or delete a <a>ByteMatchTuple</a>.</p>
   */
  Action: "INSERT" | "DELETE" | string;

  /**
   * <p>Information about the part of a web request that you want AWS WAF to inspect and the value that you want AWS WAF to search for. If you specify <code>DELETE</code> for the value of <code>Action</code>, the <code>ByteMatchTuple</code> values must exactly match the values in the <code>ByteMatchTuple</code> that you want to delete from the <code>ByteMatchSet</code>.</p>
   */
  ByteMatchTuple: _ByteMatchTuple;
}

export interface _UnmarshalledByteMatchSetUpdate extends _ByteMatchSetUpdate {
  /**
   * <p>Information about the part of a web request that you want AWS WAF to inspect and the value that you want AWS WAF to search for. If you specify <code>DELETE</code> for the value of <code>Action</code>, the <code>ByteMatchTuple</code> values must exactly match the values in the <code>ByteMatchTuple</code> that you want to delete from the <code>ByteMatchSet</code>.</p>
   */
  ByteMatchTuple: _UnmarshalledByteMatchTuple;
}
