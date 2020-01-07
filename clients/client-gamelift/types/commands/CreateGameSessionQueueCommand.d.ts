import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateGameSessionQueueInput, CreateGameSessionQueueOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGameSessionQueueCommandInput = CreateGameSessionQueueInput;
export declare type CreateGameSessionQueueCommandOutput = CreateGameSessionQueueOutput & __MetadataBearer;
export declare class CreateGameSessionQueueCommand extends $Command<CreateGameSessionQueueCommandInput, CreateGameSessionQueueCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateGameSessionQueueCommandInput;
    constructor(input: CreateGameSessionQueueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGameSessionQueueCommandInput, CreateGameSessionQueueCommandOutput>;
    private serialize;
    private deserialize;
}
