// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { PutEventsCommand, PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand";
import { PutItemsCommand, PutItemsCommandInput, PutItemsCommandOutput } from "./commands/PutItemsCommand";
import { PutUsersCommand, PutUsersCommandInput, PutUsersCommandOutput } from "./commands/PutUsersCommand";
import { PersonalizeEventsClient, PersonalizeEventsClientConfig } from "./PersonalizeEventsClient";

const commands = {
  PutEventsCommand,
  PutItemsCommand,
  PutUsersCommand,
};

export interface PersonalizeEvents {
  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(args: PutEventsCommandInput, options?: __HttpHandlerOptions): Promise<PutEventsCommandOutput>;
  putEvents(args: PutEventsCommandInput, cb: (err: any, data?: PutEventsCommandOutput) => void): void;
  putEvents(
    args: PutEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutItemsCommand}
   */
  putItems(args: PutItemsCommandInput, options?: __HttpHandlerOptions): Promise<PutItemsCommandOutput>;
  putItems(args: PutItemsCommandInput, cb: (err: any, data?: PutItemsCommandOutput) => void): void;
  putItems(
    args: PutItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutUsersCommand}
   */
  putUsers(args: PutUsersCommandInput, options?: __HttpHandlerOptions): Promise<PutUsersCommandOutput>;
  putUsers(args: PutUsersCommandInput, cb: (err: any, data?: PutUsersCommandOutput) => void): void;
  putUsers(
    args: PutUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUsersCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Personalize can consume real-time user event data, such as <i>stream</i> or <i>click</i> data, and use
 *       it for model training either alone or combined with historical data. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.</p>
 */
export class PersonalizeEvents extends PersonalizeEventsClient implements PersonalizeEvents {}
createAggregatedClient(commands, PersonalizeEvents);
