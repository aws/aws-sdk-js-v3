import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { DescribeExportConfigurationsRequest, DescribeExportConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeExportConfigurationsCommandInput = DescribeExportConfigurationsRequest;
export declare type DescribeExportConfigurationsCommandOutput = DescribeExportConfigurationsResponse & __MetadataBearer;
export declare class DescribeExportConfigurationsCommand extends $Command<DescribeExportConfigurationsCommandInput, DescribeExportConfigurationsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: DescribeExportConfigurationsCommandInput;
    constructor(input: DescribeExportConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExportConfigurationsCommandInput, DescribeExportConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
