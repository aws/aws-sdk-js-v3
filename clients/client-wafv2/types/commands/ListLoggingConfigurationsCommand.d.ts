import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { ListLoggingConfigurationsRequest, ListLoggingConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLoggingConfigurationsCommandInput = ListLoggingConfigurationsRequest;
export declare type ListLoggingConfigurationsCommandOutput = ListLoggingConfigurationsResponse & __MetadataBearer;
export declare class ListLoggingConfigurationsCommand extends $Command<ListLoggingConfigurationsCommandInput, ListLoggingConfigurationsCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: ListLoggingConfigurationsCommandInput;
    constructor(input: ListLoggingConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLoggingConfigurationsCommandInput, ListLoggingConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
