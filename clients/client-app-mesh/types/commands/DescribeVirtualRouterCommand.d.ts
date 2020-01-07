import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeVirtualRouterInput, DescribeVirtualRouterOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVirtualRouterCommandInput = DescribeVirtualRouterInput;
export declare type DescribeVirtualRouterCommandOutput = DescribeVirtualRouterOutput & __MetadataBearer;
export declare class DescribeVirtualRouterCommand extends $Command<DescribeVirtualRouterCommandInput, DescribeVirtualRouterCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DescribeVirtualRouterCommandInput;
    constructor(input: DescribeVirtualRouterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVirtualRouterCommandInput, DescribeVirtualRouterCommandOutput>;
    private serialize;
    private deserialize;
}
