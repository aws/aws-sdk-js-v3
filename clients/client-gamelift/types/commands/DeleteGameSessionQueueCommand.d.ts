import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteGameSessionQueueInput, DeleteGameSessionQueueOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteGameSessionQueueCommandInput = DeleteGameSessionQueueInput;
export declare type DeleteGameSessionQueueCommandOutput = DeleteGameSessionQueueOutput & __MetadataBearer;
export declare class DeleteGameSessionQueueCommand extends $Command<DeleteGameSessionQueueCommandInput, DeleteGameSessionQueueCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteGameSessionQueueCommandInput;
    constructor(input: DeleteGameSessionQueueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGameSessionQueueCommandInput, DeleteGameSessionQueueCommandOutput>;
    private serialize;
    private deserialize;
}
