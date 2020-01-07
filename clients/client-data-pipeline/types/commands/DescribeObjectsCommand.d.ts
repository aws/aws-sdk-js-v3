import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { DescribeObjectsInput, DescribeObjectsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeObjectsCommandInput = DescribeObjectsInput;
export declare type DescribeObjectsCommandOutput = DescribeObjectsOutput & __MetadataBearer;
export declare class DescribeObjectsCommand extends $Command<DescribeObjectsCommandInput, DescribeObjectsCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: DescribeObjectsCommandInput;
    constructor(input: DescribeObjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeObjectsCommandInput, DescribeObjectsCommandOutput>;
    private serialize;
    private deserialize;
}
