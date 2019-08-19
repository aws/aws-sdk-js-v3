/**
 * <p>Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events. </p>
 */
export interface _MessageTag {
  /**
   * <p>The name of the message tag. The message tag name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
   */
  Name: string;

  /**
   * <p>The value of the message tag. The message tag value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
   */
  Value: string;
}

export type _UnmarshalledMessageTag = _MessageTag;
