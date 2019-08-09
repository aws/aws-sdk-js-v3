/**
 * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
 */
export interface _Operator {
  /**
   * <p> The logical operation to be performed: equal (<code>EQ</code>), equal reference (<code>REF_EQ</code>), less than or equal (<code>LE</code>), greater than or equal (<code>GE</code>), or between (<code>BETWEEN</code>). Equal reference (<code>REF_EQ</code>) can be used only with reference fields. The other comparison types can be used only with String fields. The comparison types you can use apply only to certain object fields, as detailed below. </p> <p> The comparison operators EQ and REF_EQ act on the following fields: </p> <ul> <li>name</li> <li>@sphere</li> <li>parent</li> <li>@componentParent</li> <li>@instanceParent</li> <li>@status</li> <li>@scheduledStartTime</li> <li>@scheduledEndTime</li> <li>@actualStartTime</li> <li>@actualEndTime</li> </ul> <p> The comparison operators <code>GE</code>, <code>LE</code>, and <code>BETWEEN</code> act on the following fields: </p> <ul> <li>@scheduledStartTime</li> <li>@scheduledEndTime</li> <li>@actualStartTime</li> <li>@actualEndTime</li> </ul> <p>Note that fields beginning with the at sign (@) are read-only and set by the web service. When you name fields, you should choose names containing only alpha-numeric values, as symbols may be reserved by AWS Data Pipeline. User-defined fields that you add to a pipeline should prefix their name with the string "my".</p>
   */
  type?: "EQ" | "REF_EQ" | "LE" | "GE" | "BETWEEN" | string;

  /**
   * <p>The value that the actual field value will be compared with.</p>
   */
  values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledOperator extends _Operator {
  /**
   * <p>The value that the actual field value will be compared with.</p>
   */
  values?: Array<string>;
}
