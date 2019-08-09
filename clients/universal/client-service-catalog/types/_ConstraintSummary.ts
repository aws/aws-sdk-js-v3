/**
 * <p>Summary information about a constraint.</p>
 */
export interface _ConstraintSummary {
  /**
   * <p>The type of constraint.</p> <ul> <li> <p> <code>LAUNCH</code> </p> </li> <li> <p> <code>NOTIFICATION</code> </p> </li> <li> <p>STACKSET</p> </li> <li> <p> <code>TEMPLATE</code> </p> </li> </ul>
   */
  Type?: string;

  /**
   * <p>The description of the constraint.</p>
   */
  Description?: string;
}

export type _UnmarshalledConstraintSummary = _ConstraintSummary;
