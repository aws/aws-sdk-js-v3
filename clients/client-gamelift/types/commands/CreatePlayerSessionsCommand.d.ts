import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreatePlayerSessionsInput, CreatePlayerSessionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePlayerSessionsCommandInput = CreatePlayerSessionsInput;
export declare type CreatePlayerSessionsCommandOutput = CreatePlayerSessionsOutput & __MetadataBearer;
export declare class CreatePlayerSessionsCommand extends $Command<CreatePlayerSessionsCommandInput, CreatePlayerSessionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreatePlayerSessionsCommandInput;
    constructor(input: CreatePlayerSessionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlayerSessionsCommandInput, CreatePlayerSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
