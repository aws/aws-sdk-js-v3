import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeApplicationCommandInput = DescribeApplicationRequest;
export declare type DescribeApplicationCommandOutput = DescribeApplicationResponse & __MetadataBearer;
export declare class DescribeApplicationCommand extends $Command<DescribeApplicationCommandInput, DescribeApplicationCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DescribeApplicationCommandInput;
    constructor(input: DescribeApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationCommandInput, DescribeApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
