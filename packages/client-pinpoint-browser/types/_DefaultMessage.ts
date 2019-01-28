/**
 * The default message to use across all channels.
 */
export interface _DefaultMessage {
    /**
     * The message body of the notification, the email body or the text message.
     */
    Body?: string;

    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: {[key: string]: Array<string>|Iterable<string>}|Iterable<[string, Array<string>|Iterable<string>]>;
}

export interface _UnmarshalledDefaultMessage extends _DefaultMessage {
    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: {[key: string]: Array<string>};
}