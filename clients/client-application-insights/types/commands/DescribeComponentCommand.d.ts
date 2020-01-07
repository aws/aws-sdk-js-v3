import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DescribeComponentRequest, DescribeComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeComponentCommandInput = DescribeComponentRequest;
export declare type DescribeComponentCommandOutput = DescribeComponentResponse & __MetadataBearer;
export declare class DescribeComponentCommand extends $Command<DescribeComponentCommandInput, DescribeComponentCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DescribeComponentCommandInput;
    constructor(input: DescribeComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeComponentCommandInput, DescribeComponentCommandOutput>;
    private serialize;
    private deserialize;
}
