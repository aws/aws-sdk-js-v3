/**
 * <p>Information about a constraint.</p>
 */
export interface _ConstraintDetail {
  /**
   * <p>The identifier of the constraint.</p>
   */
  ConstraintId?: string;

  /**
   * <p>The type of constraint.</p> <ul> <li> <p> <code>LAUNCH</code> </p> </li> <li> <p> <code>NOTIFICATION</code> </p> </li> <li> <p>STACKSET</p> </li> <li> <p> <code>TEMPLATE</code> </p> </li> </ul>
   */
  Type?: string;

  /**
   * <p>The description of the constraint.</p>
   */
  Description?: string;

  /**
   * <p>The owner of the constraint.</p>
   */
  Owner?: string;
}

export type _UnmarshalledConstraintDetail = _ConstraintDetail;
