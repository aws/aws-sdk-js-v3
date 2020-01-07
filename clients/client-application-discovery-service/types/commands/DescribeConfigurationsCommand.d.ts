import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { DescribeConfigurationsRequest, DescribeConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigurationsCommandInput = DescribeConfigurationsRequest;
export declare type DescribeConfigurationsCommandOutput = DescribeConfigurationsResponse & __MetadataBearer;
export declare class DescribeConfigurationsCommand extends $Command<DescribeConfigurationsCommandInput, DescribeConfigurationsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: DescribeConfigurationsCommandInput;
    constructor(input: DescribeConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationsCommandInput, DescribeConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
