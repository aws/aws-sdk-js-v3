import {
  _SubResourceSummary,
  _UnmarshalledSubResourceSummary
} from "./_SubResourceSummary";
import {
  _SummarizedCounter,
  _UnmarshalledSummarizedCounter
} from "./_SummarizedCounter";
import {
  _AttackProperty,
  _UnmarshalledAttackProperty
} from "./_AttackProperty";
import { _Mitigation, _UnmarshalledMitigation } from "./_Mitigation";

/**
 * <p>The details of a DDoS attack.</p>
 */
export interface _AttackDetail {
  /**
   * <p>The unique identifier (ID) of the attack.</p>
   */
  AttackId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
   */
  ResourceArn?: string;

  /**
   * <p>If applicable, additional detail about the resource being attacked, for example, IP address or URL.</p>
   */
  SubResources?: Array<_SubResourceSummary> | Iterable<_SubResourceSummary>;

  /**
   * <p>The time the attack started, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The time the attack ended, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>List of counters that describe the attack for the specified time period.</p>
   */
  AttackCounters?: Array<_SummarizedCounter> | Iterable<_SummarizedCounter>;

  /**
   * <p>The array of <a>AttackProperty</a> objects.</p>
   */
  AttackProperties?: Array<_AttackProperty> | Iterable<_AttackProperty>;

  /**
   * <p>List of mitigation actions taken for the attack.</p>
   */
  Mitigations?: Array<_Mitigation> | Iterable<_Mitigation>;
}

export interface _UnmarshalledAttackDetail extends _AttackDetail {
  /**
   * <p>If applicable, additional detail about the resource being attacked, for example, IP address or URL.</p>
   */
  SubResources?: Array<_UnmarshalledSubResourceSummary>;

  /**
   * <p>The time the attack started, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the attack ended, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  EndTime?: Date;

  /**
   * <p>List of counters that describe the attack for the specified time period.</p>
   */
  AttackCounters?: Array<_UnmarshalledSummarizedCounter>;

  /**
   * <p>The array of <a>AttackProperty</a> objects.</p>
   */
  AttackProperties?: Array<_UnmarshalledAttackProperty>;

  /**
   * <p>List of mitigation actions taken for the attack.</p>
   */
  Mitigations?: Array<_UnmarshalledMitigation>;
}
