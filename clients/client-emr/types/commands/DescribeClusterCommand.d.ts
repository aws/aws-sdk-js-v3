import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeClusterInput, DescribeClusterOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterCommandInput = DescribeClusterInput;
export declare type DescribeClusterCommandOutput = DescribeClusterOutput & __MetadataBearer;
export declare class DescribeClusterCommand extends $Command<DescribeClusterCommandInput, DescribeClusterCommandOutput, EMRClientResolvedConfig> {
    readonly input: DescribeClusterCommandInput;
    constructor(input: DescribeClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterCommandInput, DescribeClusterCommandOutput>;
    private serialize;
    private deserialize;
}
