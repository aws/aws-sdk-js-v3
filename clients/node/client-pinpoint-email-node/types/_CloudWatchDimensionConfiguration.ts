/**
 * <p>An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch.</p>
 */
export interface _CloudWatchDimensionConfiguration {
  /**
   * <p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
   */
  DimensionName: string;

  /**
   * <p>The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose <code>messageTag</code>. If you want Amazon Pinpoint to use your own email headers, choose <code>emailHeader</code>. If you want Amazon Pinpoint to use link tags, choose <code>linkTags</code>.</p>
   */
  DimensionValueSource: "MESSAGE_TAG" | "EMAIL_HEADER" | "LINK_TAG" | string;

  /**
   * <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
   */
  DefaultDimensionValue: string;
}

export type _UnmarshalledCloudWatchDimensionConfiguration = _CloudWatchDimensionConfiguration;
