import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeOrganizationConformancePackStatusesRequest, DescribeOrganizationConformancePackStatusesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrganizationConformancePackStatusesCommandInput = DescribeOrganizationConformancePackStatusesRequest;
export declare type DescribeOrganizationConformancePackStatusesCommandOutput = DescribeOrganizationConformancePackStatusesResponse & __MetadataBearer;
export declare class DescribeOrganizationConformancePackStatusesCommand extends $Command<DescribeOrganizationConformancePackStatusesCommandInput, DescribeOrganizationConformancePackStatusesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeOrganizationConformancePackStatusesCommandInput;
    constructor(input: DescribeOrganizationConformancePackStatusesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationConformancePackStatusesCommandInput, DescribeOrganizationConformancePackStatusesCommandOutput>;
    private serialize;
    private deserialize;
}
