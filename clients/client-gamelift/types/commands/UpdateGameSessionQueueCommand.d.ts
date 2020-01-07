import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateGameSessionQueueInput, UpdateGameSessionQueueOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGameSessionQueueCommandInput = UpdateGameSessionQueueInput;
export declare type UpdateGameSessionQueueCommandOutput = UpdateGameSessionQueueOutput & __MetadataBearer;
export declare class UpdateGameSessionQueueCommand extends $Command<UpdateGameSessionQueueCommandInput, UpdateGameSessionQueueCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateGameSessionQueueCommandInput;
    constructor(input: UpdateGameSessionQueueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGameSessionQueueCommandInput, UpdateGameSessionQueueCommandOutput>;
    private serialize;
    private deserialize;
}
