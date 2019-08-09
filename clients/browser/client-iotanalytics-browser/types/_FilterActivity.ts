/**
 * <p>An activity that filters a message based on its attributes.</p>
 */
export interface _FilterActivity {
  /**
   * <p>The name of the 'filter' activity.</p>
   */
  name: string;

  /**
   * <p>An expression that looks like a SQL WHERE clause that must return a Boolean value.</p>
   */
  filter: string;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export type _UnmarshalledFilterActivity = _FilterActivity;
