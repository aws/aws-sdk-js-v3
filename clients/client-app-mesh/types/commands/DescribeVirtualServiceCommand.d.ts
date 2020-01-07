import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeVirtualServiceInput, DescribeVirtualServiceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVirtualServiceCommandInput = DescribeVirtualServiceInput;
export declare type DescribeVirtualServiceCommandOutput = DescribeVirtualServiceOutput & __MetadataBearer;
export declare class DescribeVirtualServiceCommand extends $Command<DescribeVirtualServiceCommandInput, DescribeVirtualServiceCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DescribeVirtualServiceCommandInput;
    constructor(input: DescribeVirtualServiceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVirtualServiceCommandInput, DescribeVirtualServiceCommandOutput>;
    private serialize;
    private deserialize;
}
