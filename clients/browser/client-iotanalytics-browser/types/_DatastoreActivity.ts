/**
 * <p>The 'datastore' activity that specifies where to store the processed data.</p>
 */
export interface _DatastoreActivity {
  /**
   * <p>The name of the 'datastore' activity.</p>
   */
  name: string;

  /**
   * <p>The name of the data store where processed messages are stored.</p>
   */
  datastoreName: string;
}

export type _UnmarshalledDatastoreActivity = _DatastoreActivity;
