import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreatePlayerSessionInput, CreatePlayerSessionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePlayerSessionCommandInput = CreatePlayerSessionInput;
export declare type CreatePlayerSessionCommandOutput = CreatePlayerSessionOutput & __MetadataBearer;
export declare class CreatePlayerSessionCommand extends $Command<CreatePlayerSessionCommandInput, CreatePlayerSessionCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreatePlayerSessionCommandInput;
    constructor(input: CreatePlayerSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlayerSessionCommandInput, CreatePlayerSessionCommandOutput>;
    private serialize;
    private deserialize;
}
