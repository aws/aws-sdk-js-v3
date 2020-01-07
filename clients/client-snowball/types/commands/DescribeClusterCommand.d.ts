import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { DescribeClusterRequest, DescribeClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterCommandInput = DescribeClusterRequest;
export declare type DescribeClusterCommandOutput = DescribeClusterResult & __MetadataBearer;
export declare class DescribeClusterCommand extends $Command<DescribeClusterCommandInput, DescribeClusterCommandOutput, SnowballClientResolvedConfig> {
    readonly input: DescribeClusterCommandInput;
    constructor(input: DescribeClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterCommandInput, DescribeClusterCommandOutput>;
    private serialize;
    private deserialize;
}
