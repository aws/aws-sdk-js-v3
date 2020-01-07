import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateMatchmakingConfigurationInput, CreateMatchmakingConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMatchmakingConfigurationCommandInput = CreateMatchmakingConfigurationInput;
export declare type CreateMatchmakingConfigurationCommandOutput = CreateMatchmakingConfigurationOutput & __MetadataBearer;
export declare class CreateMatchmakingConfigurationCommand extends $Command<CreateMatchmakingConfigurationCommandInput, CreateMatchmakingConfigurationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateMatchmakingConfigurationCommandInput;
    constructor(input: CreateMatchmakingConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMatchmakingConfigurationCommandInput, CreateMatchmakingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
