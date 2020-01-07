import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetConformancePackComplianceSummaryRequest, GetConformancePackComplianceSummaryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConformancePackComplianceSummaryCommandInput = GetConformancePackComplianceSummaryRequest;
export declare type GetConformancePackComplianceSummaryCommandOutput = GetConformancePackComplianceSummaryResponse & __MetadataBearer;
export declare class GetConformancePackComplianceSummaryCommand extends $Command<GetConformancePackComplianceSummaryCommandInput, GetConformancePackComplianceSummaryCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetConformancePackComplianceSummaryCommandInput;
    constructor(input: GetConformancePackComplianceSummaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConformancePackComplianceSummaryCommandInput, GetConformancePackComplianceSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
