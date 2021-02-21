import {
  DynamoDBClient,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Client as __Client } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions } from "@aws-sdk/types";

import { GetCommand, GetCommandInput, GetCommandOutput } from "./commands/GetCommand";
import { PutCommand, PutCommandInput, PutCommandOutput } from "./commands/PutCommand";

export class DynamoDBDocument extends __Client<
  HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DynamoDBClientResolvedConfig
> {
  private constructor(client: DynamoDBClient) {
    super(client.config);
  }

  static from(client: DynamoDBClient) {
    return new DynamoDBDocument(client);
  }

  public get(args: GetCommandInput, options?: HttpHandlerOptions): Promise<GetCommandOutput>;
  public get(args: GetCommandInput, cb: (err: any, data?: GetCommandOutput) => void): void;
  public get(args: GetCommandInput, options: HttpHandlerOptions, cb: (err: any, data?: GetCommandOutput) => void): void;
  public get(
    args: GetCommandInput,
    optionsOrCb?: HttpHandlerOptions | ((err: any, data?: GetCommandOutput) => void),
    cb?: (err: any, data?: GetCommandOutput) => void
  ): Promise<GetCommandOutput> | void {
    const command = new GetCommand(args);

    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      this.send(command, optionsOrCb);
    }
  }

  public put(args: PutCommandInput, options?: HttpHandlerOptions): Promise<PutCommandOutput>;
  public put(args: PutCommandInput, cb: (err: any, data?: PutCommandOutput) => void): void;
  public put(args: PutCommandInput, options: HttpHandlerOptions, cb: (err: any, data?: PutCommandOutput) => void): void;
  public put(
    args: PutCommandInput,
    optionsOrCb?: HttpHandlerOptions | ((err: any, data?: PutCommandOutput) => void),
    cb?: (err: any, data?: PutCommandOutput) => void
  ): Promise<PutCommandOutput> | void {
    const command = new PutCommand(args);

    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but put ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      this.send(command, optionsOrCb);
    }
  }
}
