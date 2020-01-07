import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DescribeModelVersionsRequest, DescribeModelVersionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeModelVersionsCommandInput = DescribeModelVersionsRequest;
export declare type DescribeModelVersionsCommandOutput = DescribeModelVersionsResult & __MetadataBearer;
export declare class DescribeModelVersionsCommand extends $Command<DescribeModelVersionsCommandInput, DescribeModelVersionsCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DescribeModelVersionsCommandInput;
    constructor(input: DescribeModelVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeModelVersionsCommandInput, DescribeModelVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
