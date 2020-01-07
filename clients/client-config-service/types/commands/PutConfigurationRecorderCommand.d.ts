import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutConfigurationRecorderRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutConfigurationRecorderCommandInput = PutConfigurationRecorderRequest;
export declare type PutConfigurationRecorderCommandOutput = __MetadataBearer;
export declare class PutConfigurationRecorderCommand extends $Command<PutConfigurationRecorderCommandInput, PutConfigurationRecorderCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutConfigurationRecorderCommandInput;
    constructor(input: PutConfigurationRecorderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConfigurationRecorderCommandInput, PutConfigurationRecorderCommandOutput>;
    private serialize;
    private deserialize;
}
