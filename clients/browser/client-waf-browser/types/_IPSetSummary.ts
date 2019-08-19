/**
 * <p>Contains the identifier and the name of the <code>IPSet</code>.</p>
 */
export interface _IPSetSummary {
  /**
   * <p>The <code>IPSetId</code> for an <a>IPSet</a>. You can use <code>IPSetId</code> in a <a>GetIPSet</a> request to get detailed information about an <a>IPSet</a>.</p>
   */
  IPSetId: string;

  /**
   * <p>A friendly name or description of the <a>IPSet</a>. You can't change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string;
}

export type _UnmarshalledIPSetSummary = _IPSetSummary;
