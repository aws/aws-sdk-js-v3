// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type PutActionInteractionsCommandInput,
  type PutActionInteractionsCommandOutput,
  PutActionInteractionsCommand,
} from "./commands/PutActionInteractionsCommand";
import {
  type PutActionsCommandInput,
  type PutActionsCommandOutput,
  PutActionsCommand,
} from "./commands/PutActionsCommand";
import { type PutEventsCommandInput, type PutEventsCommandOutput, PutEventsCommand } from "./commands/PutEventsCommand";
import { type PutItemsCommandInput, type PutItemsCommandOutput, PutItemsCommand } from "./commands/PutItemsCommand";
import { type PutUsersCommandInput, type PutUsersCommandOutput, PutUsersCommand } from "./commands/PutUsersCommand";
import { PersonalizeEventsClient } from "./PersonalizeEventsClient";

const commands = {
  PutActionInteractionsCommand,
  PutActionsCommand,
  PutEventsCommand,
  PutItemsCommand,
  PutUsersCommand,
};

export interface PersonalizeEvents {
  /**
   * @see {@link PutActionInteractionsCommand}
   */
  putActionInteractions(
    args: PutActionInteractionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutActionInteractionsCommandOutput>;
  putActionInteractions(
    args: PutActionInteractionsCommandInput,
    cb: (err: any, data?: PutActionInteractionsCommandOutput) => void
  ): void;
  putActionInteractions(
    args: PutActionInteractionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutActionInteractionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutActionsCommand}
   */
  putActions(
    args: PutActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutActionsCommandOutput>;
  putActions(
    args: PutActionsCommandInput,
    cb: (err: any, data?: PutActionsCommandOutput) => void
  ): void;
  putActions(
    args: PutActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventsCommandOutput>;
  putEvents(
    args: PutEventsCommandInput,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  putEvents(
    args: PutEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutItemsCommand}
   */
  putItems(
    args: PutItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutItemsCommandOutput>;
  putItems(
    args: PutItemsCommandInput,
    cb: (err: any, data?: PutItemsCommandOutput) => void
  ): void;
  putItems(
    args: PutItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutUsersCommand}
   */
  putUsers(
    args: PutUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutUsersCommandOutput>;
  putUsers(
    args: PutUsersCommandInput,
    cb: (err: any, data?: PutUsersCommandOutput) => void
  ): void;
  putUsers(
    args: PutUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUsersCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Personalize can consume real-time user event data, such as <i>stream</i> or <i>click</i> data, and use
 *       it for model training either alone or combined with historical data. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-item-interaction-events.html">Recording item interaction events</a>.</p>
 * @public
 */
export class PersonalizeEvents extends PersonalizeEventsClient implements PersonalizeEvents {}
createAggregatedClient(commands, PersonalizeEvents);
