/**
 * <p>Provides information about an intent.</p>
 */
export interface _IntentMetadata {
  /**
   * <p>The name of the intent.</p>
   */
  name?: string;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>The date that the intent was updated. When you create an intent, the creation date and last updated date are the same.</p>
   */
  lastUpdatedDate?: Date | string | number;

  /**
   * <p>The date that the intent was created.</p>
   */
  createdDate?: Date | string | number;

  /**
   * <p>The version of the intent.</p>
   */
  version?: string;
}

export interface _UnmarshalledIntentMetadata extends _IntentMetadata {
  /**
   * <p>The date that the intent was updated. When you create an intent, the creation date and last updated date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the intent was created.</p>
   */
  createdDate?: Date;
}
