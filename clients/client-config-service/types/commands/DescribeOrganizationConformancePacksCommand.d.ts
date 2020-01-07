import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeOrganizationConformancePacksRequest, DescribeOrganizationConformancePacksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrganizationConformancePacksCommandInput = DescribeOrganizationConformancePacksRequest;
export declare type DescribeOrganizationConformancePacksCommandOutput = DescribeOrganizationConformancePacksResponse & __MetadataBearer;
export declare class DescribeOrganizationConformancePacksCommand extends $Command<DescribeOrganizationConformancePacksCommandInput, DescribeOrganizationConformancePacksCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeOrganizationConformancePacksCommandInput;
    constructor(input: DescribeOrganizationConformancePacksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationConformancePacksCommandInput, DescribeOrganizationConformancePacksCommandOutput>;
    private serialize;
    private deserialize;
}
