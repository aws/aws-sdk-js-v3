import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBotChannelAssociationOutput shape
 */
export interface GetBotChannelAssociationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the association between the bot and the channel.</p>
   */
  name?: string;

  /**
   * <p>A description of the association between the bot and the channel.</p>
   */
  description?: string;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.</p>
   */
  botAlias?: string;

  /**
   * <p>The name of the Amazon Lex bot.</p>
   */
  botName?: string;

  /**
   * <p>The date that the association between the bot and the channel was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The type of the messaging platform.</p>
   */
  type?: "Facebook" | "Slack" | "Twilio-Sms" | "Kik" | string;

  /**
   * <p>Provides information that the messaging platform needs to communicate with the Amazon Lex bot.</p>
   */
  botConfiguration?: { [key: string]: string };

  /**
   * <p>The status of the bot channel. </p> <ul> <li> <p> <code>CREATED</code> - The channel has been created and is ready for use.</p> </li> <li> <p> <code>IN_PROGRESS</code> - Channel creation is in progress.</p> </li> <li> <p> <code>FAILED</code> - There was an error creating the channel. For information about the reason for the failure, see the <code>failureReason</code> field.</p> </li> </ul>
   */
  status?: "IN_PROGRESS" | "CREATED" | "FAILED" | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the reason that it failed to create the association.</p>
   */
  failureReason?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
