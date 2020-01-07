import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConformancePackComplianceRequest, DescribeConformancePackComplianceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConformancePackComplianceCommandInput = DescribeConformancePackComplianceRequest;
export declare type DescribeConformancePackComplianceCommandOutput = DescribeConformancePackComplianceResponse & __MetadataBearer;
export declare class DescribeConformancePackComplianceCommand extends $Command<DescribeConformancePackComplianceCommandInput, DescribeConformancePackComplianceCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConformancePackComplianceCommandInput;
    constructor(input: DescribeConformancePackComplianceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConformancePackComplianceCommandInput, DescribeConformancePackComplianceCommandOutput>;
    private serialize;
    private deserialize;
}
