import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StartConfigurationRecorderRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartConfigurationRecorderCommandInput = StartConfigurationRecorderRequest;
export declare type StartConfigurationRecorderCommandOutput = __MetadataBearer;
export declare class StartConfigurationRecorderCommand extends $Command<StartConfigurationRecorderCommandInput, StartConfigurationRecorderCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: StartConfigurationRecorderCommandInput;
    constructor(input: StartConfigurationRecorderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartConfigurationRecorderCommandInput, StartConfigurationRecorderCommandOutput>;
    private serialize;
    private deserialize;
}
