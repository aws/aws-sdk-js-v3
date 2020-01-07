import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DescribeJobRequest, DescribeJobResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeJobCommandInput = DescribeJobRequest;
export declare type DescribeJobCommandOutput = DescribeJobResult & __MetadataBearer;
export declare class DescribeJobCommand extends $Command<DescribeJobCommandInput, DescribeJobCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: DescribeJobCommandInput;
    constructor(input: DescribeJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeJobCommandInput, DescribeJobCommandOutput>;
    private serialize;
    private deserialize;
}
