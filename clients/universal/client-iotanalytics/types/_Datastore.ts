import {
  _DatastoreStorage,
  _UnmarshalledDatastoreStorage
} from "./_DatastoreStorage";
import {
  _RetentionPeriod,
  _UnmarshalledRetentionPeriod
} from "./_RetentionPeriod";

/**
 * <p>Information about a data store.</p>
 */
export interface _Datastore {
  /**
   * <p>The name of the data store.</p>
   */
  name?: string;

  /**
   * <p>Where data store data is stored.</p>
   */
  storage?: _DatastoreStorage;

  /**
   * <p>The ARN of the data store.</p>
   */
  arn?: string;

  /**
   * <p>The status of a data store:</p> <dl> <dt>CREATING</dt> <dd> <p>The data store is being created.</p> </dd> <dt>ACTIVE</dt> <dd> <p>The data store has been created and can be used.</p> </dd> <dt>DELETING</dt> <dd> <p>The data store is being deleted.</p> </dd> </dl>
   */
  status?: "CREATING" | "ACTIVE" | "DELETING" | string;

  /**
   * <p>How long, in days, message data is kept for the data store.</p>
   */
  retentionPeriod?: _RetentionPeriod;

  /**
   * <p>When the data store was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The last time the data store was updated.</p>
   */
  lastUpdateTime?: Date | string | number;
}

export interface _UnmarshalledDatastore extends _Datastore {
  /**
   * <p>Where data store data is stored.</p>
   */
  storage?: _UnmarshalledDatastoreStorage;

  /**
   * <p>How long, in days, message data is kept for the data store.</p>
   */
  retentionPeriod?: _UnmarshalledRetentionPeriod;

  /**
   * <p>When the data store was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the data store was updated.</p>
   */
  lastUpdateTime?: Date;
}
