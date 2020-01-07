import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeJobFlowsInput, DescribeJobFlowsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeJobFlowsCommandInput = DescribeJobFlowsInput;
export declare type DescribeJobFlowsCommandOutput = DescribeJobFlowsOutput & __MetadataBearer;
export declare class DescribeJobFlowsCommand extends $Command<DescribeJobFlowsCommandInput, DescribeJobFlowsCommandOutput, EMRClientResolvedConfig> {
    readonly input: DescribeJobFlowsCommandInput;
    constructor(input: DescribeJobFlowsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeJobFlowsCommandInput, DescribeJobFlowsCommandOutput>;
    private serialize;
    private deserialize;
}
