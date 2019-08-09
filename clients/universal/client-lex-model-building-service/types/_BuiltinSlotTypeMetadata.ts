/**
 * <p>Provides information about a built in slot type.</p>
 */
export interface _BuiltinSlotTypeMetadata {
  /**
   * <p>A unique identifier for the built-in slot type. To find the signature for a slot type, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.</p>
   */
  signature?: string;

  /**
   * <p>A list of target locales for the slot. </p>
   */
  supportedLocales?:
    | Array<"en-US" | "en-GB" | "de-DE" | string>
    | Iterable<"en-US" | "en-GB" | "de-DE" | string>;
}

export interface _UnmarshalledBuiltinSlotTypeMetadata
  extends _BuiltinSlotTypeMetadata {
  /**
   * <p>A list of target locales for the slot. </p>
   */
  supportedLocales?: Array<"en-US" | "en-GB" | "de-DE" | string>;
}
