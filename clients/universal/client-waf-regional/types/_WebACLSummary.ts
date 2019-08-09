/**
 * <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p>
 */
export interface _WebACLSummary {
  /**
   * <p>A unique identifier for a <code>WebACL</code>. You use <code>WebACLId</code> to get information about a <code>WebACL</code> (see <a>GetWebACL</a>), update a <code>WebACL</code> (see <a>UpdateWebACL</a>), and delete a <code>WebACL</code> from AWS WAF (see <a>DeleteWebACL</a>).</p> <p> <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by <a>ListWebACLs</a>.</p>
   */
  WebACLId: string;

  /**
   * <p>A friendly name or description of the <a>WebACL</a>. You can't change the name of a <code>WebACL</code> after you create it.</p>
   */
  Name: string;
}

export type _UnmarshalledWebACLSummary = _WebACLSummary;
