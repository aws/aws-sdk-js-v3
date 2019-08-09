import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";
import {
  _TimestampRange,
  _UnmarshalledTimestampRange
} from "./_TimestampRange";

/**
 * <p>This data type is used as a request parameter in the <a>ListFindings</a> action.</p>
 */
export interface _FindingFilter {
  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>agentId</b> property of the <a>Finding</a> data type.</p>
   */
  agentIds?: Array<string> | Iterable<string>;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>autoScalingGroup</b> property of the <a>Finding</a> data type.</p>
   */
  autoScalingGroups?: Array<string> | Iterable<string>;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>ruleName</b> property of the <a>Finding</a> data type.</p>
   */
  ruleNames?: Array<string> | Iterable<string>;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>severity</b> property of the <a>Finding</a> data type.</p>
   */
  severities?:
    | Array<"Low" | "Medium" | "High" | "Informational" | "Undefined" | string>
    | Iterable<
        "Low" | "Medium" | "High" | "Informational" | "Undefined" | string
      >;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>rulesPackageArn</b> property of the <a>Finding</a> data type.</p>
   */
  rulesPackageArns?: Array<string> | Iterable<string>;

  /**
   * <p>For a record to match a filter, the list of values that are specified for this data type property must be contained in the list of values of the <b>attributes</b> property of the <a>Finding</a> data type.</p>
   */
  attributes?: Array<_Attribute> | Iterable<_Attribute>;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must be contained in the list of values of the <b>userAttributes</b> property of the <a>Finding</a> data type.</p>
   */
  userAttributes?: Array<_Attribute> | Iterable<_Attribute>;

  /**
   * <p>The time range during which the finding is generated.</p>
   */
  creationTimeRange?: _TimestampRange;
}

export interface _UnmarshalledFindingFilter extends _FindingFilter {
  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>agentId</b> property of the <a>Finding</a> data type.</p>
   */
  agentIds?: Array<string>;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>autoScalingGroup</b> property of the <a>Finding</a> data type.</p>
   */
  autoScalingGroups?: Array<string>;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>ruleName</b> property of the <a>Finding</a> data type.</p>
   */
  ruleNames?: Array<string>;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>severity</b> property of the <a>Finding</a> data type.</p>
   */
  severities?: Array<
    "Low" | "Medium" | "High" | "Informational" | "Undefined" | string
  >;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>rulesPackageArn</b> property of the <a>Finding</a> data type.</p>
   */
  rulesPackageArns?: Array<string>;

  /**
   * <p>For a record to match a filter, the list of values that are specified for this data type property must be contained in the list of values of the <b>attributes</b> property of the <a>Finding</a> data type.</p>
   */
  attributes?: Array<_UnmarshalledAttribute>;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must be contained in the list of values of the <b>userAttributes</b> property of the <a>Finding</a> data type.</p>
   */
  userAttributes?: Array<_UnmarshalledAttribute>;

  /**
   * <p>The time range during which the finding is generated.</p>
   */
  creationTimeRange?: _UnmarshalledTimestampRange;
}
