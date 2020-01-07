import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DescribeApplicationStateRequest, DescribeApplicationStateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeApplicationStateCommandInput = DescribeApplicationStateRequest;
export declare type DescribeApplicationStateCommandOutput = DescribeApplicationStateResult & __MetadataBearer;
export declare class DescribeApplicationStateCommand extends $Command<DescribeApplicationStateCommandInput, DescribeApplicationStateCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DescribeApplicationStateCommandInput;
    constructor(input: DescribeApplicationStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationStateCommandInput, DescribeApplicationStateCommandOutput>;
    private serialize;
    private deserialize;
}
