import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterMessage, DescribeDBClustersMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBClustersCommandInput = DescribeDBClustersMessage;
export declare type DescribeDBClustersCommandOutput = DBClusterMessage & __MetadataBearer;
export declare class DescribeDBClustersCommand extends $Command<DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeDBClustersCommandInput;
    constructor(input: DescribeDBClustersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput>;
    private serialize;
    private deserialize;
}
