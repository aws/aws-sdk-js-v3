import { _Position, _UnmarshalledPosition } from "./_Position";

/**
 * <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
 */
export interface _Statement {
  /**
   * <p>The identifier of the policy that was provided as an input.</p>
   */
  SourcePolicyId?: string;

  /**
   * <p>The type of the policy.</p>
   */
  SourcePolicyType?:
    | "user"
    | "group"
    | "role"
    | "aws-managed"
    | "user-managed"
    | "resource"
    | "none"
    | string;

  /**
   * <p>The row and column of the beginning of the <code>Statement</code> in an IAM policy.</p>
   */
  StartPosition?: _Position;

  /**
   * <p>The row and column of the end of a <code>Statement</code> in an IAM policy.</p>
   */
  EndPosition?: _Position;
}

export interface _UnmarshalledStatement extends _Statement {
  /**
   * <p>The row and column of the beginning of the <code>Statement</code> in an IAM policy.</p>
   */
  StartPosition?: _UnmarshalledPosition;

  /**
   * <p>The row and column of the end of a <code>Statement</code> in an IAM policy.</p>
   */
  EndPosition?: _UnmarshalledPosition;
}
