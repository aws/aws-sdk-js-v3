/**
 * <p>Describes an event for a database.</p>
 */
export interface _RelationalDatabaseEvent {
  /**
   * <p>The database that the database event relates to.</p>
   */
  resource?: string;

  /**
   * <p>The timestamp when the database event was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The message of the database event.</p>
   */
  message?: string;

  /**
   * <p>The category that the database event belongs to.</p>
   */
  eventCategories?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledRelationalDatabaseEvent
  extends _RelationalDatabaseEvent {
  /**
   * <p>The timestamp when the database event was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The category that the database event belongs to.</p>
   */
  eventCategories?: Array<string>;
}
