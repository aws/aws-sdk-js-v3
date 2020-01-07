import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateRuntimeConfigurationInput, UpdateRuntimeConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRuntimeConfigurationCommandInput = UpdateRuntimeConfigurationInput;
export declare type UpdateRuntimeConfigurationCommandOutput = UpdateRuntimeConfigurationOutput & __MetadataBearer;
export declare class UpdateRuntimeConfigurationCommand extends $Command<UpdateRuntimeConfigurationCommandInput, UpdateRuntimeConfigurationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateRuntimeConfigurationCommandInput;
    constructor(input: UpdateRuntimeConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRuntimeConfigurationCommandInput, UpdateRuntimeConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
