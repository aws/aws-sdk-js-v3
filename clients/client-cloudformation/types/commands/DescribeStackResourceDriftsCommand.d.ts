import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackResourceDriftsInput, DescribeStackResourceDriftsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackResourceDriftsCommandInput = DescribeStackResourceDriftsInput;
export declare type DescribeStackResourceDriftsCommandOutput = DescribeStackResourceDriftsOutput & __MetadataBearer;
export declare class DescribeStackResourceDriftsCommand extends $Command<DescribeStackResourceDriftsCommandInput, DescribeStackResourceDriftsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeStackResourceDriftsCommandInput;
    constructor(input: DescribeStackResourceDriftsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackResourceDriftsCommandInput, DescribeStackResourceDriftsCommandOutput>;
    private serialize;
    private deserialize;
}
