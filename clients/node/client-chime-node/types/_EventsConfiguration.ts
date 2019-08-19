/**
 * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
 */
export interface _EventsConfiguration {
  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * <p>HTTPS endpoint that allows a bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;

  /**
   * <p>Lambda function ARN that allows a bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;
}

export type _UnmarshalledEventsConfiguration = _EventsConfiguration;
