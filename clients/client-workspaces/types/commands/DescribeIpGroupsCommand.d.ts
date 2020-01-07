import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeIpGroupsRequest, DescribeIpGroupsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIpGroupsCommandInput = DescribeIpGroupsRequest;
export declare type DescribeIpGroupsCommandOutput = DescribeIpGroupsResult & __MetadataBearer;
export declare class DescribeIpGroupsCommand extends $Command<DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeIpGroupsCommandInput;
    constructor(input: DescribeIpGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
