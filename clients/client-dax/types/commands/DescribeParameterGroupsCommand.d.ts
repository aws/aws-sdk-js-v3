import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeParameterGroupsRequest, DescribeParameterGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeParameterGroupsCommandInput = DescribeParameterGroupsRequest;
export declare type DescribeParameterGroupsCommandOutput = DescribeParameterGroupsResponse & __MetadataBearer;
export declare class DescribeParameterGroupsCommand extends $Command<DescribeParameterGroupsCommandInput, DescribeParameterGroupsCommandOutput, DAXClientResolvedConfig> {
    readonly input: DescribeParameterGroupsCommandInput;
    constructor(input: DescribeParameterGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeParameterGroupsCommandInput, DescribeParameterGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
