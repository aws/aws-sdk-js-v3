import {
  _AwsSecurityFindingFilters,
  _UnmarshalledAwsSecurityFindingFilters
} from "./_AwsSecurityFindingFilters";

/**
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface _Insight {
  /**
   * <p>The ARN of a Security Hub insight.</p>
   */
  InsightArn: string;

  /**
   * <p>The name of a Security Hub insight.</p>
   */
  Name: string;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. Only findings that match the criteria defined in the filters are included in the insight.</p>
   */
  Filters: _AwsSecurityFindingFilters;

  /**
   * <p>The attribute that the insight's findings are grouped by. This attribute is used as a findings aggregator for the purposes of viewing and managing multiple related findings under a single operand.</p>
   */
  GroupByAttribute: string;
}

export interface _UnmarshalledInsight extends _Insight {
  /**
   * <p>One or more attributes used to filter the findings included in the insight. Only findings that match the criteria defined in the filters are included in the insight.</p>
   */
  Filters: _UnmarshalledAwsSecurityFindingFilters;
}
