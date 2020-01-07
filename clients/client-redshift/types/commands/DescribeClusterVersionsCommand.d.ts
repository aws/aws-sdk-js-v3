import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterVersionsMessage, DescribeClusterVersionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterVersionsCommandInput = DescribeClusterVersionsMessage;
export declare type DescribeClusterVersionsCommandOutput = ClusterVersionsMessage & __MetadataBearer;
export declare class DescribeClusterVersionsCommand extends $Command<DescribeClusterVersionsCommandInput, DescribeClusterVersionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterVersionsCommandInput;
    constructor(input: DescribeClusterVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterVersionsCommandInput, DescribeClusterVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
