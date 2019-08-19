/**
 * <p>Contains the name and value of a tag that you can provide to <code>SendEmail</code> or <code>SendRawEmail</code> to apply to an email.</p> <p>Message tags, which you use with configuration sets, enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _MessageTag {
  /**
   * <p>The name of the tag. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 256 characters.</p> </li> </ul>
   */
  Name: string;

  /**
   * <p>The value of the tag. The value must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 256 characters.</p> </li> </ul>
   */
  Value: string;
}

export type _UnmarshalledMessageTag = _MessageTag;
