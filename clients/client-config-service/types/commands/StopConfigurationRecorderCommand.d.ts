import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StopConfigurationRecorderRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopConfigurationRecorderCommandInput = StopConfigurationRecorderRequest;
export declare type StopConfigurationRecorderCommandOutput = __MetadataBearer;
export declare class StopConfigurationRecorderCommand extends $Command<StopConfigurationRecorderCommandInput, StopConfigurationRecorderCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: StopConfigurationRecorderCommandInput;
    constructor(input: StopConfigurationRecorderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopConfigurationRecorderCommandInput, StopConfigurationRecorderCommandOutput>;
    private serialize;
    private deserialize;
}
