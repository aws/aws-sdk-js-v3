import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeResourceGroupsRequest, DescribeResourceGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeResourceGroupsCommandInput = DescribeResourceGroupsRequest;
export declare type DescribeResourceGroupsCommandOutput = DescribeResourceGroupsResponse & __MetadataBearer;
export declare class DescribeResourceGroupsCommand extends $Command<DescribeResourceGroupsCommandInput, DescribeResourceGroupsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeResourceGroupsCommandInput;
    constructor(input: DescribeResourceGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResourceGroupsCommandInput, DescribeResourceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
