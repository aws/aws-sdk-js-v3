import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeVirtualNodeInput, DescribeVirtualNodeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVirtualNodeCommandInput = DescribeVirtualNodeInput;
export declare type DescribeVirtualNodeCommandOutput = DescribeVirtualNodeOutput & __MetadataBearer;
export declare class DescribeVirtualNodeCommand extends $Command<DescribeVirtualNodeCommandInput, DescribeVirtualNodeCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DescribeVirtualNodeCommandInput;
    constructor(input: DescribeVirtualNodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVirtualNodeCommandInput, DescribeVirtualNodeCommandOutput>;
    private serialize;
    private deserialize;
}
