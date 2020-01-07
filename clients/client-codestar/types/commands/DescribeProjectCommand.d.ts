import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { DescribeProjectRequest, DescribeProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProjectCommandInput = DescribeProjectRequest;
export declare type DescribeProjectCommandOutput = DescribeProjectResult & __MetadataBearer;
export declare class DescribeProjectCommand extends $Command<DescribeProjectCommandInput, DescribeProjectCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: DescribeProjectCommandInput;
    constructor(input: DescribeProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProjectCommandInput, DescribeProjectCommandOutput>;
    private serialize;
    private deserialize;
}
