import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DescribeStreamSummaryInput, DescribeStreamSummaryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStreamSummaryCommandInput = DescribeStreamSummaryInput;
export declare type DescribeStreamSummaryCommandOutput = DescribeStreamSummaryOutput & __MetadataBearer;
export declare class DescribeStreamSummaryCommand extends $Command<DescribeStreamSummaryCommandInput, DescribeStreamSummaryCommandOutput, KinesisClientResolvedConfig> {
    readonly input: DescribeStreamSummaryCommandInput;
    constructor(input: DescribeStreamSummaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStreamSummaryCommandInput, DescribeStreamSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
