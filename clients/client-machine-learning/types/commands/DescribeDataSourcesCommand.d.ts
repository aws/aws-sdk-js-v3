import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeDataSourcesInput, DescribeDataSourcesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDataSourcesCommandInput = DescribeDataSourcesInput;
export declare type DescribeDataSourcesCommandOutput = DescribeDataSourcesOutput & __MetadataBearer;
export declare class DescribeDataSourcesCommand extends $Command<DescribeDataSourcesCommandInput, DescribeDataSourcesCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DescribeDataSourcesCommandInput;
    constructor(input: DescribeDataSourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataSourcesCommandInput, DescribeDataSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
