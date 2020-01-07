import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterParameterGroupsMessage, DescribeClusterParameterGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterParameterGroupsCommandInput = DescribeClusterParameterGroupsMessage;
export declare type DescribeClusterParameterGroupsCommandOutput = ClusterParameterGroupsMessage & __MetadataBearer;
export declare class DescribeClusterParameterGroupsCommand extends $Command<DescribeClusterParameterGroupsCommandInput, DescribeClusterParameterGroupsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterParameterGroupsCommandInput;
    constructor(input: DescribeClusterParameterGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterParameterGroupsCommandInput, DescribeClusterParameterGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
