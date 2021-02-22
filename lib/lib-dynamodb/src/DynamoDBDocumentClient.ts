import {
  DynamoDBClient,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Client as __Client, SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions } from "@aws-sdk/types";

import { NativeItemCommand } from "./commands/NativeItemCommand";
import { TranslateConfiguration } from "./commands/types";

export class DynamoDBDocumentClient extends __Client<
  HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DynamoDBClientResolvedConfig
> {
  readonly config: DynamoDBClientResolvedConfig;
  readonly translateConfiguration?: TranslateConfiguration;

  protected constructor(client: DynamoDBClient, translateConfiguration?: TranslateConfiguration) {
    super(client.config);
    this.config = client.config;
    this.middlewareStack = client.middlewareStack;
    this.translateConfiguration = translateConfiguration;
  }

  static from(client: DynamoDBClient, translateConfiguration?: TranslateConfiguration) {
    return new DynamoDBDocumentClient(client, translateConfiguration);
  }

  destroy(): void {
    // no-op
  }

  send<InputType extends ServiceInputTypes, OutputType extends ServiceOutputTypes>(
    command: NativeItemCommand<
      InputType,
      OutputType,
      SmithyResolvedConfiguration<HttpHandlerOptions>,
      ServiceInputTypes,
      ServiceOutputTypes
    >,
    options?: HttpHandlerOptions
  ): Promise<OutputType>;
  send<InputType extends ServiceInputTypes, OutputType extends ServiceOutputTypes>(
    command: NativeItemCommand<
      InputType,
      OutputType,
      SmithyResolvedConfiguration<HttpHandlerOptions>,
      ServiceInputTypes,
      ServiceOutputTypes
    >,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType extends ServiceInputTypes, OutputType extends ServiceOutputTypes>(
    command: NativeItemCommand<
      InputType,
      OutputType,
      SmithyResolvedConfiguration<HttpHandlerOptions>,
      ServiceInputTypes,
      ServiceOutputTypes
    >,
    options: HttpHandlerOptions,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType extends ServiceInputTypes, OutputType extends ServiceOutputTypes>(
    command: NativeItemCommand<
      InputType,
      OutputType,
      SmithyResolvedConfiguration<HttpHandlerOptions>,
      ServiceInputTypes,
      ServiceOutputTypes
    >,
    optionsOrCb?: HttpHandlerOptions | ((err: any, data?: OutputType) => void),
    cb?: (err: any, data?: OutputType) => void
  ): Promise<OutputType> | void {
    if (!command.translateConfiguration && this.translateConfiguration) {
      command.translateConfiguration = this.translateConfiguration;
    }

    if (typeof optionsOrCb === "function") {
      super.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but delete ${typeof optionsOrCb}`);
      super.send(command, optionsOrCb || {}, cb);
    } else {
      return super.send(command, optionsOrCb);
    }
  }
}
