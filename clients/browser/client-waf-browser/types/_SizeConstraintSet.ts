import {
  _SizeConstraint,
  _UnmarshalledSizeConstraint
} from "./_SizeConstraint";

/**
 * <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p>
 */
export interface _SizeConstraintSet {
  /**
   * <p>A unique identifier for a <code>SizeConstraintSet</code>. You use <code>SizeConstraintSetId</code> to get information about a <code>SizeConstraintSet</code> (see <a>GetSizeConstraintSet</a>), update a <code>SizeConstraintSet</code> (see <a>UpdateSizeConstraintSet</a>), insert a <code>SizeConstraintSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SizeConstraintSet</code> from AWS WAF (see <a>DeleteSizeConstraintSet</a>).</p> <p> <code>SizeConstraintSetId</code> is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.</p>
   */
  SizeConstraintSetId: string;

  /**
   * <p>The name, if any, of the <code>SizeConstraintSet</code>.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the parts of web requests that you want to inspect the size of.</p>
   */
  SizeConstraints: Array<_SizeConstraint> | Iterable<_SizeConstraint>;
}

export interface _UnmarshalledSizeConstraintSet extends _SizeConstraintSet {
  /**
   * <p>Specifies the parts of web requests that you want to inspect the size of.</p>
   */
  SizeConstraints: Array<_UnmarshalledSizeConstraint>;
}
