import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DescribeDetectorRequest, DescribeDetectorResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDetectorCommandInput = DescribeDetectorRequest;
export declare type DescribeDetectorCommandOutput = DescribeDetectorResult & __MetadataBearer;
export declare class DescribeDetectorCommand extends $Command<DescribeDetectorCommandInput, DescribeDetectorCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DescribeDetectorCommandInput;
    constructor(input: DescribeDetectorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDetectorCommandInput, DescribeDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
