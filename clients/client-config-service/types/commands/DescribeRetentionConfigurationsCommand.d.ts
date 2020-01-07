import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeRetentionConfigurationsRequest, DescribeRetentionConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRetentionConfigurationsCommandInput = DescribeRetentionConfigurationsRequest;
export declare type DescribeRetentionConfigurationsCommandOutput = DescribeRetentionConfigurationsResponse & __MetadataBearer;
export declare class DescribeRetentionConfigurationsCommand extends $Command<DescribeRetentionConfigurationsCommandInput, DescribeRetentionConfigurationsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeRetentionConfigurationsCommandInput;
    constructor(input: DescribeRetentionConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRetentionConfigurationsCommandInput, DescribeRetentionConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
