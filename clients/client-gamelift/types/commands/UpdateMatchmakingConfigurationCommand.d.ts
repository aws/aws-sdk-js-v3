import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateMatchmakingConfigurationInput, UpdateMatchmakingConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMatchmakingConfigurationCommandInput = UpdateMatchmakingConfigurationInput;
export declare type UpdateMatchmakingConfigurationCommandOutput = UpdateMatchmakingConfigurationOutput & __MetadataBearer;
export declare class UpdateMatchmakingConfigurationCommand extends $Command<UpdateMatchmakingConfigurationCommandInput, UpdateMatchmakingConfigurationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateMatchmakingConfigurationCommandInput;
    constructor(input: UpdateMatchmakingConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMatchmakingConfigurationCommandInput, UpdateMatchmakingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
