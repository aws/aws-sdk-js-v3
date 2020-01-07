import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { DescribeEnvironmentMembershipsRequest, DescribeEnvironmentMembershipsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEnvironmentMembershipsCommandInput = DescribeEnvironmentMembershipsRequest;
export declare type DescribeEnvironmentMembershipsCommandOutput = DescribeEnvironmentMembershipsResult & __MetadataBearer;
export declare class DescribeEnvironmentMembershipsCommand extends $Command<DescribeEnvironmentMembershipsCommandInput, DescribeEnvironmentMembershipsCommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: DescribeEnvironmentMembershipsCommandInput;
    constructor(input: DescribeEnvironmentMembershipsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEnvironmentMembershipsCommandInput, DescribeEnvironmentMembershipsCommandOutput>;
    private serialize;
    private deserialize;
}
