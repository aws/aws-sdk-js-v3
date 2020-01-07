import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DescribeTestCasesInput, DescribeTestCasesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTestCasesCommandInput = DescribeTestCasesInput;
export declare type DescribeTestCasesCommandOutput = DescribeTestCasesOutput & __MetadataBearer;
export declare class DescribeTestCasesCommand extends $Command<DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DescribeTestCasesCommandInput;
    constructor(input: DescribeTestCasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput>;
    private serialize;
    private deserialize;
}
