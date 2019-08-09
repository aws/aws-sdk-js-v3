/**
 * <p>Provides metadata for a built-in intent.</p>
 */
export interface _BuiltinIntentMetadata {
  /**
   * <p>A unique identifier for the built-in intent. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.</p>
   */
  signature?: string;

  /**
   * <p>A list of identifiers for the locales that the intent supports.</p>
   */
  supportedLocales?:
    | Array<"en-US" | "en-GB" | "de-DE" | string>
    | Iterable<"en-US" | "en-GB" | "de-DE" | string>;
}

export interface _UnmarshalledBuiltinIntentMetadata
  extends _BuiltinIntentMetadata {
  /**
   * <p>A list of identifiers for the locales that the intent supports.</p>
   */
  supportedLocales?: Array<"en-US" | "en-GB" | "de-DE" | string>;
}
