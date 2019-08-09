/**
 * <p>Identifies the specific version of an intent.</p>
 */
export interface _Intent {
  /**
   * <p>The name of the intent.</p>
   */
  intentName: string;

  /**
   * <p>The version of the intent.</p>
   */
  intentVersion: string;
}

export type _UnmarshalledIntent = _Intent;
