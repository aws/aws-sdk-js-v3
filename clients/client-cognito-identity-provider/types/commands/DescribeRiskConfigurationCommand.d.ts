import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeRiskConfigurationRequest, DescribeRiskConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRiskConfigurationCommandInput = DescribeRiskConfigurationRequest;
export declare type DescribeRiskConfigurationCommandOutput = DescribeRiskConfigurationResponse & __MetadataBearer;
export declare class DescribeRiskConfigurationCommand extends $Command<DescribeRiskConfigurationCommandInput, DescribeRiskConfigurationCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeRiskConfigurationCommandInput;
    constructor(input: DescribeRiskConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRiskConfigurationCommandInput, DescribeRiskConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
