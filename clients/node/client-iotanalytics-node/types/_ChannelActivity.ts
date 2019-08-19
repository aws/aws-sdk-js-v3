/**
 * <p>The activity that determines the source of the messages to be processed.</p>
 */
export interface _ChannelActivity {
  /**
   * <p>The name of the 'channel' activity.</p>
   */
  name: string;

  /**
   * <p>The name of the channel from which the messages are processed.</p>
   */
  channelName: string;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export type _UnmarshalledChannelActivity = _ChannelActivity;
