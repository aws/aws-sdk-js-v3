import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeTasksRequest, DescribeTasksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTasksCommandInput = DescribeTasksRequest;
export declare type DescribeTasksCommandOutput = DescribeTasksResponse & __MetadataBearer;
export declare class DescribeTasksCommand extends $Command<DescribeTasksCommandInput, DescribeTasksCommandOutput, ECSClientResolvedConfig> {
    readonly input: DescribeTasksCommandInput;
    constructor(input: DescribeTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTasksCommandInput, DescribeTasksCommandOutput>;
    private serialize;
    private deserialize;
}
