/**
 * <p>The text message.</p>
 */
export interface _Text {
  /**
   * <p>The locale of the text message. Currently, en-US is supported.</p>
   */
  Locale: "en-US" | string;

  /**
   * <p>The value of the text message.</p>
   */
  Value: string;
}

export type _UnmarshalledText = _Text;
