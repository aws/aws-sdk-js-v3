import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBProxyTargetGroupsRequest, DescribeDBProxyTargetGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBProxyTargetGroupsCommandInput = DescribeDBProxyTargetGroupsRequest;
export declare type DescribeDBProxyTargetGroupsCommandOutput = DescribeDBProxyTargetGroupsResponse & __MetadataBearer;
export declare class DescribeDBProxyTargetGroupsCommand extends $Command<DescribeDBProxyTargetGroupsCommandInput, DescribeDBProxyTargetGroupsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBProxyTargetGroupsCommandInput;
    constructor(input: DescribeDBProxyTargetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBProxyTargetGroupsCommandInput, DescribeDBProxyTargetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
