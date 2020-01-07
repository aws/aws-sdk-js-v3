import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConformancePacksRequest, DescribeConformancePacksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConformancePacksCommandInput = DescribeConformancePacksRequest;
export declare type DescribeConformancePacksCommandOutput = DescribeConformancePacksResponse & __MetadataBearer;
export declare class DescribeConformancePacksCommand extends $Command<DescribeConformancePacksCommandInput, DescribeConformancePacksCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConformancePacksCommandInput;
    constructor(input: DescribeConformancePacksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConformancePacksCommandInput, DescribeConformancePacksCommandOutput>;
    private serialize;
    private deserialize;
}
