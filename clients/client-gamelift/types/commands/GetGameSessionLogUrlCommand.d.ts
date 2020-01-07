import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { GetGameSessionLogUrlInput, GetGameSessionLogUrlOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGameSessionLogUrlCommandInput = GetGameSessionLogUrlInput;
export declare type GetGameSessionLogUrlCommandOutput = GetGameSessionLogUrlOutput & __MetadataBearer;
export declare class GetGameSessionLogUrlCommand extends $Command<GetGameSessionLogUrlCommandInput, GetGameSessionLogUrlCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: GetGameSessionLogUrlCommandInput;
    constructor(input: GetGameSessionLogUrlCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGameSessionLogUrlCommandInput, GetGameSessionLogUrlCommandOutput>;
    private serialize;
    private deserialize;
}
