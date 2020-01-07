import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeTaskSetsRequest, DescribeTaskSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTaskSetsCommandInput = DescribeTaskSetsRequest;
export declare type DescribeTaskSetsCommandOutput = DescribeTaskSetsResponse & __MetadataBearer;
export declare class DescribeTaskSetsCommand extends $Command<DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput, ECSClientResolvedConfig> {
    readonly input: DescribeTaskSetsCommandInput;
    constructor(input: DescribeTaskSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput>;
    private serialize;
    private deserialize;
}
