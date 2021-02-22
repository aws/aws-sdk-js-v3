import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { HttpHandlerOptions } from "@aws-sdk/types";

import { DeleteCommand, DeleteCommandInput, DeleteCommandOutput } from "./commands/DeleteCommand";
import { GetCommand, GetCommandInput, GetCommandOutput } from "./commands/GetCommand";
import { PutCommand, PutCommandInput, PutCommandOutput } from "./commands/PutCommand";
import { TranslateConfiguration } from "./commands/types";
import { DynamoDBDocumentClient } from "./DynamoDBDocumentClient";

export class DynamoDBDocument extends DynamoDBDocumentClient {
  static from(client: DynamoDBClient, translateConfiguration?: TranslateConfiguration) {
    return new DynamoDBDocument(client, translateConfiguration);
  }

  public delete(args: DeleteCommandInput, options?: HttpHandlerOptions): Promise<DeleteCommandOutput>;
  public delete(args: DeleteCommandInput, cb: (err: any, data?: DeleteCommandOutput) => void): void;
  public delete(
    args: DeleteCommandInput,
    options: HttpHandlerOptions,
    cb: (err: any, data?: DeleteCommandOutput) => void
  ): void;
  public delete(
    args: DeleteCommandInput,
    optionsOrCb?: HttpHandlerOptions | ((err: any, data?: DeleteCommandOutput) => void),
    cb?: (err: any, data?: DeleteCommandOutput) => void
  ): Promise<DeleteCommandOutput> | void {
    const command = new DeleteCommand(args, this.translateConfiguration);

    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but delete ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public get(args: GetCommandInput, options?: HttpHandlerOptions): Promise<GetCommandOutput>;
  public get(args: GetCommandInput, cb: (err: any, data?: GetCommandOutput) => void): void;
  public get(args: GetCommandInput, options: HttpHandlerOptions, cb: (err: any, data?: GetCommandOutput) => void): void;
  public get(
    args: GetCommandInput,
    optionsOrCb?: HttpHandlerOptions | ((err: any, data?: GetCommandOutput) => void),
    cb?: (err: any, data?: GetCommandOutput) => void
  ): Promise<GetCommandOutput> | void {
    const command = new GetCommand(args, this.translateConfiguration);

    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
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
    const command = new PutCommand(args, this.translateConfiguration);

    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but put ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
