import {
  _AttackVectorDescription,
  _UnmarshalledAttackVectorDescription
} from "./_AttackVectorDescription";

/**
 * <p>Summarizes all DDoS attacks for a specified time period.</p>
 */
export interface _AttackSummary {
  /**
   * <p>The unique identifier (ID) of the attack.</p>
   */
  AttackId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The start time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The end time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The list of attacks for a specified time period.</p>
   */
  AttackVectors?:
    | Array<_AttackVectorDescription>
    | Iterable<_AttackVectorDescription>;
}

export interface _UnmarshalledAttackSummary extends _AttackSummary {
  /**
   * <p>The start time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  EndTime?: Date;

  /**
   * <p>The list of attacks for a specified time period.</p>
   */
  AttackVectors?: Array<_UnmarshalledAttackVectorDescription>;
}
