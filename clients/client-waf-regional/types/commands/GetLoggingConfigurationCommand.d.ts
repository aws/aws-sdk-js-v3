import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetLoggingConfigurationRequest, GetLoggingConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLoggingConfigurationCommandInput = GetLoggingConfigurationRequest;
export declare type GetLoggingConfigurationCommandOutput = GetLoggingConfigurationResponse & __MetadataBearer;
export declare class GetLoggingConfigurationCommand extends $Command<GetLoggingConfigurationCommandInput, GetLoggingConfigurationCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetLoggingConfigurationCommandInput;
    constructor(input: GetLoggingConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoggingConfigurationCommandInput, GetLoggingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
