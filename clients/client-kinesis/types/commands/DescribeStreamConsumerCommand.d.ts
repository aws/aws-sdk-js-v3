import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DescribeStreamConsumerInput, DescribeStreamConsumerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStreamConsumerCommandInput = DescribeStreamConsumerInput;
export declare type DescribeStreamConsumerCommandOutput = DescribeStreamConsumerOutput & __MetadataBearer;
export declare class DescribeStreamConsumerCommand extends $Command<DescribeStreamConsumerCommandInput, DescribeStreamConsumerCommandOutput, KinesisClientResolvedConfig> {
    readonly input: DescribeStreamConsumerCommandInput;
    constructor(input: DescribeStreamConsumerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStreamConsumerCommandInput, DescribeStreamConsumerCommandOutput>;
    private serialize;
    private deserialize;
}
