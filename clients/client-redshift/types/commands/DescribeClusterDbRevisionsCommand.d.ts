import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterDbRevisionsMessage, DescribeClusterDbRevisionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterDbRevisionsCommandInput = DescribeClusterDbRevisionsMessage;
export declare type DescribeClusterDbRevisionsCommandOutput = ClusterDbRevisionsMessage & __MetadataBearer;
export declare class DescribeClusterDbRevisionsCommand extends $Command<DescribeClusterDbRevisionsCommandInput, DescribeClusterDbRevisionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterDbRevisionsCommandInput;
    constructor(input: DescribeClusterDbRevisionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterDbRevisionsCommandInput, DescribeClusterDbRevisionsCommandOutput>;
    private serialize;
    private deserialize;
}
