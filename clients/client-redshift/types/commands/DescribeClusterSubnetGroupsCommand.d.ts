import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterSubnetGroupMessage, DescribeClusterSubnetGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterSubnetGroupsCommandInput = DescribeClusterSubnetGroupsMessage;
export declare type DescribeClusterSubnetGroupsCommandOutput = ClusterSubnetGroupMessage & __MetadataBearer;
export declare class DescribeClusterSubnetGroupsCommand extends $Command<DescribeClusterSubnetGroupsCommandInput, DescribeClusterSubnetGroupsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterSubnetGroupsCommandInput;
    constructor(input: DescribeClusterSubnetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterSubnetGroupsCommandInput, DescribeClusterSubnetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
