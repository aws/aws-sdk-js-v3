import { _Filter, _UnmarshalledFilter } from "./_Filter";

/**
 * <p>Defines a list of <code>NestedFilters</code> objects. To satisfy the conditions specified in the <code>NestedFilters</code> call, a resource must satisfy the conditions of all of the filters.</p> <p>For example, you could define a <code>NestedFilters</code> using the training job's <code>InputDataConfig</code> property to filter on <code>Channel</code> objects. </p> <p>A <code>NestedFilters</code> object contains multiple filters. For example, to find all training jobs whose name contains <code>train</code> and that have <code>cat/data</code> in their <code>S3Uri</code> (specified in <code>InputDataConfig</code>), you need to create a <code>NestedFilters</code> object that specifies the <code>InputDataConfig</code> property with the following <code>Filter</code> objects:</p> <ul> <li> <p> <code>'{Name:"InputDataConfig.ChannelName", "Operator":"EQUALS", "Value":"train"}',</code> </p> </li> <li> <p> <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"CONTAINS", "Value":"cat/data"}'</code> </p> </li> </ul>
 */
export interface _NestedFilters {
  /**
   * <p>The name of the property to use in the nested filters. The value must match a listed property name, such as <code>InputDataConfig</code>.</p>
   */
  NestedPropertyName: string;

  /**
   * <p>A list of filters. Each filter acts on a property. Filters must contain at least one <code>Filters</code> value. For example, a <code>NestedFilters</code> call might include a filter on the <code>PropertyName</code> parameter of the <code>InputDataConfig</code> property: <code>InputDataConfig.DataSource.S3DataSource.S3Uri</code>.</p>
   */
  Filters: Array<_Filter> | Iterable<_Filter>;
}

export interface _UnmarshalledNestedFilters extends _NestedFilters {
  /**
   * <p>A list of filters. Each filter acts on a property. Filters must contain at least one <code>Filters</code> value. For example, a <code>NestedFilters</code> call might include a filter on the <code>PropertyName</code> parameter of the <code>InputDataConfig</code> property: <code>InputDataConfig.DataSource.S3DataSource.S3Uri</code>.</p>
   */
  Filters: Array<_UnmarshalledFilter>;
}
