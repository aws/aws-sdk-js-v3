import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateGameSessionInput, CreateGameSessionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGameSessionCommandInput = CreateGameSessionInput;
export declare type CreateGameSessionCommandOutput = CreateGameSessionOutput & __MetadataBearer;
export declare class CreateGameSessionCommand extends $Command<CreateGameSessionCommandInput, CreateGameSessionCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateGameSessionCommandInput;
    constructor(input: CreateGameSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGameSessionCommandInput, CreateGameSessionCommandOutput>;
    private serialize;
    private deserialize;
}
