import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { DescribeEnvironmentStatusRequest, DescribeEnvironmentStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEnvironmentStatusCommandInput = DescribeEnvironmentStatusRequest;
export declare type DescribeEnvironmentStatusCommandOutput = DescribeEnvironmentStatusResult & __MetadataBearer;
export declare class DescribeEnvironmentStatusCommand extends $Command<DescribeEnvironmentStatusCommandInput, DescribeEnvironmentStatusCommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: DescribeEnvironmentStatusCommandInput;
    constructor(input: DescribeEnvironmentStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEnvironmentStatusCommandInput, DescribeEnvironmentStatusCommandOutput>;
    private serialize;
    private deserialize;
}
