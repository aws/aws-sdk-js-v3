import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { PutLoggingConfigurationRequest, PutLoggingConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutLoggingConfigurationCommandInput = PutLoggingConfigurationRequest;
export declare type PutLoggingConfigurationCommandOutput = PutLoggingConfigurationResponse & __MetadataBearer;
export declare class PutLoggingConfigurationCommand extends $Command<PutLoggingConfigurationCommandInput, PutLoggingConfigurationCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: PutLoggingConfigurationCommandInput;
    constructor(input: PutLoggingConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLoggingConfigurationCommandInput, PutLoggingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
