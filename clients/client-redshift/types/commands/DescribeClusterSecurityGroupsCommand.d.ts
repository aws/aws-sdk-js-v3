import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterSecurityGroupMessage, DescribeClusterSecurityGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterSecurityGroupsCommandInput = DescribeClusterSecurityGroupsMessage;
export declare type DescribeClusterSecurityGroupsCommandOutput = ClusterSecurityGroupMessage & __MetadataBearer;
export declare class DescribeClusterSecurityGroupsCommand extends $Command<DescribeClusterSecurityGroupsCommandInput, DescribeClusterSecurityGroupsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterSecurityGroupsCommandInput;
    constructor(input: DescribeClusterSecurityGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterSecurityGroupsCommandInput, DescribeClusterSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
