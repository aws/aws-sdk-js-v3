import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DescribeComponentConfigurationRequest, DescribeComponentConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeComponentConfigurationCommandInput = DescribeComponentConfigurationRequest;
export declare type DescribeComponentConfigurationCommandOutput = DescribeComponentConfigurationResponse & __MetadataBearer;
export declare class DescribeComponentConfigurationCommand extends $Command<DescribeComponentConfigurationCommandInput, DescribeComponentConfigurationCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DescribeComponentConfigurationCommandInput;
    constructor(input: DescribeComponentConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeComponentConfigurationCommandInput, DescribeComponentConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
