import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeRemediationConfigurationsRequest, DescribeRemediationConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRemediationConfigurationsCommandInput = DescribeRemediationConfigurationsRequest;
export declare type DescribeRemediationConfigurationsCommandOutput = DescribeRemediationConfigurationsResponse & __MetadataBearer;
export declare class DescribeRemediationConfigurationsCommand extends $Command<DescribeRemediationConfigurationsCommandInput, DescribeRemediationConfigurationsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeRemediationConfigurationsCommandInput;
    constructor(input: DescribeRemediationConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRemediationConfigurationsCommandInput, DescribeRemediationConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
