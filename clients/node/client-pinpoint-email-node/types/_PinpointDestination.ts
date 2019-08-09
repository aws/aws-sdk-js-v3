/**
 * <p>An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.</p>
 */
export interface _PinpointDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Pinpoint project that you want to send email events to.</p>
   */
  ApplicationArn?: string;
}

export type _UnmarshalledPinpointDestination = _PinpointDestination;
