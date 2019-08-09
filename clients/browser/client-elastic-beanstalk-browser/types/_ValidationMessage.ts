/**
 * <p>An error or warning for a desired configuration option value.</p>
 */
export interface _ValidationMessage {
  /**
   * <p>A message describing the error or warning.</p>
   */
  Message?: string;

  /**
   * <p>An indication of the severity of this message:</p> <ul> <li> <p> <code>error</code>: This message indicates that this is not a valid setting for an option.</p> </li> <li> <p> <code>warning</code>: This message is providing information you should take into account.</p> </li> </ul>
   */
  Severity?: "error" | "warning" | string;

  /**
   * <p>The namespace to which the option belongs.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the option.</p>
   */
  OptionName?: string;
}

export type _UnmarshalledValidationMessage = _ValidationMessage;
