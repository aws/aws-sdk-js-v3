import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeRouteInput, DescribeRouteOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRouteCommandInput = DescribeRouteInput;
export declare type DescribeRouteCommandOutput = DescribeRouteOutput & __MetadataBearer;
export declare class DescribeRouteCommand extends $Command<DescribeRouteCommandInput, DescribeRouteCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DescribeRouteCommandInput;
    constructor(input: DescribeRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRouteCommandInput, DescribeRouteCommandOutput>;
    private serialize;
    private deserialize;
}
