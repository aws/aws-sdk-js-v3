import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteMatchmakingConfigurationInput, DeleteMatchmakingConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMatchmakingConfigurationCommandInput = DeleteMatchmakingConfigurationInput;
export declare type DeleteMatchmakingConfigurationCommandOutput = DeleteMatchmakingConfigurationOutput & __MetadataBearer;
export declare class DeleteMatchmakingConfigurationCommand extends $Command<DeleteMatchmakingConfigurationCommandInput, DeleteMatchmakingConfigurationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteMatchmakingConfigurationCommandInput;
    constructor(input: DeleteMatchmakingConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMatchmakingConfigurationCommandInput, DeleteMatchmakingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
