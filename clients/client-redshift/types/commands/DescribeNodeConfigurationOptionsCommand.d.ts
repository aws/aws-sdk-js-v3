import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeNodeConfigurationOptionsMessage, NodeConfigurationOptionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNodeConfigurationOptionsCommandInput = DescribeNodeConfigurationOptionsMessage;
export declare type DescribeNodeConfigurationOptionsCommandOutput = NodeConfigurationOptionsMessage & __MetadataBearer;
export declare class DescribeNodeConfigurationOptionsCommand extends $Command<DescribeNodeConfigurationOptionsCommandInput, DescribeNodeConfigurationOptionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeNodeConfigurationOptionsCommandInput;
    constructor(input: DescribeNodeConfigurationOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNodeConfigurationOptionsCommandInput, DescribeNodeConfigurationOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
