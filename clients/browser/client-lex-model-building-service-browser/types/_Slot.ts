import { _Prompt, _UnmarshalledPrompt } from "./_Prompt";

/**
 * <p>Identifies the version of a specific slot.</p>
 */
export interface _Slot {
  /**
   * <p>The name of the slot.</p>
   */
  name: string;

  /**
   * <p>A description of the slot.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the slot is required or optional. </p>
   */
  slotConstraint: "Required" | "Optional" | string;

  /**
   * <p>The type of the slot, either a custom slot type that you defined or one of the built-in slot types.</p>
   */
  slotType?: string;

  /**
   * <p>The version of the slot type.</p>
   */
  slotTypeVersion?: string;

  /**
   * <p>The prompt that Amazon Lex uses to elicit the slot value from the user.</p>
   */
  valueElicitationPrompt?: _Prompt;

  /**
   * <p> Directs Lex the order in which to elicit this slot value from the user. For example, if the intent has two slots with priorities 1 and 2, AWS Lex first elicits a value for the slot with priority 1.</p> <p>If multiple slots share the same priority, the order in which Lex elicits values is arbitrary.</p>
   */
  priority?: number;

  /**
   * <p> If you know a specific pattern with which users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances. </p>
   */
  sampleUtterances?: Array<string> | Iterable<string>;

  /**
   * <p> A set of possible responses for the slot type used by text-based clients. A user chooses an option from the response card, instead of using text to reply. </p>
   */
  responseCard?: string;
}

export interface _UnmarshalledSlot extends _Slot {
  /**
   * <p>The prompt that Amazon Lex uses to elicit the slot value from the user.</p>
   */
  valueElicitationPrompt?: _UnmarshalledPrompt;

  /**
   * <p> If you know a specific pattern with which users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances. </p>
   */
  sampleUtterances?: Array<string>;
}
