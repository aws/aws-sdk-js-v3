import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateGameSessionInput, UpdateGameSessionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGameSessionCommandInput = UpdateGameSessionInput;
export declare type UpdateGameSessionCommandOutput = UpdateGameSessionOutput & __MetadataBearer;
export declare class UpdateGameSessionCommand extends $Command<UpdateGameSessionCommandInput, UpdateGameSessionCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateGameSessionCommandInput;
    constructor(input: UpdateGameSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGameSessionCommandInput, UpdateGameSessionCommandOutput>;
    private serialize;
    private deserialize;
}
