import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeApplicationCommandInput = DescribeApplicationRequest;
export declare type DescribeApplicationCommandOutput = DescribeApplicationResponse & __MetadataBearer;
export declare class DescribeApplicationCommand extends $Command<DescribeApplicationCommandInput, DescribeApplicationCommandOutput, KinesisAnalyticsClientResolvedConfig> {
    readonly input: DescribeApplicationCommandInput;
    constructor(input: DescribeApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationCommandInput, DescribeApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
