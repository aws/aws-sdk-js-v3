import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConformancePackStatusRequest, DescribeConformancePackStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConformancePackStatusCommandInput = DescribeConformancePackStatusRequest;
export declare type DescribeConformancePackStatusCommandOutput = DescribeConformancePackStatusResponse & __MetadataBearer;
export declare class DescribeConformancePackStatusCommand extends $Command<DescribeConformancePackStatusCommandInput, DescribeConformancePackStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConformancePackStatusCommandInput;
    constructor(input: DescribeConformancePackStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConformancePackStatusCommandInput, DescribeConformancePackStatusCommandOutput>;
    private serialize;
    private deserialize;
}
