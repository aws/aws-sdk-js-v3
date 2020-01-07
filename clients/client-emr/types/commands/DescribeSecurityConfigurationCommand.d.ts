import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeSecurityConfigurationInput, DescribeSecurityConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSecurityConfigurationCommandInput = DescribeSecurityConfigurationInput;
export declare type DescribeSecurityConfigurationCommandOutput = DescribeSecurityConfigurationOutput & __MetadataBearer;
export declare class DescribeSecurityConfigurationCommand extends $Command<DescribeSecurityConfigurationCommandInput, DescribeSecurityConfigurationCommandOutput, EMRClientResolvedConfig> {
    readonly input: DescribeSecurityConfigurationCommandInput;
    constructor(input: DescribeSecurityConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSecurityConfigurationCommandInput, DescribeSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
