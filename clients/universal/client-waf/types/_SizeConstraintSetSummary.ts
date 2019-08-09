/**
 * <p>The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.</p>
 */
export interface _SizeConstraintSetSummary {
  /**
   * <p>A unique identifier for a <code>SizeConstraintSet</code>. You use <code>SizeConstraintSetId</code> to get information about a <code>SizeConstraintSet</code> (see <a>GetSizeConstraintSet</a>), update a <code>SizeConstraintSet</code> (see <a>UpdateSizeConstraintSet</a>), insert a <code>SizeConstraintSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SizeConstraintSet</code> from AWS WAF (see <a>DeleteSizeConstraintSet</a>).</p> <p> <code>SizeConstraintSetId</code> is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.</p>
   */
  SizeConstraintSetId: string;

  /**
   * <p>The name of the <code>SizeConstraintSet</code>, if any.</p>
   */
  Name: string;
}

export type _UnmarshalledSizeConstraintSetSummary = _SizeConstraintSetSummary;
