import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DescribeLogPatternRequest, DescribeLogPatternResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLogPatternCommandInput = DescribeLogPatternRequest;
export declare type DescribeLogPatternCommandOutput = DescribeLogPatternResponse & __MetadataBearer;
export declare class DescribeLogPatternCommand extends $Command<DescribeLogPatternCommandInput, DescribeLogPatternCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DescribeLogPatternCommandInput;
    constructor(input: DescribeLogPatternCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLogPatternCommandInput, DescribeLogPatternCommandOutput>;
    private serialize;
    private deserialize;
}
