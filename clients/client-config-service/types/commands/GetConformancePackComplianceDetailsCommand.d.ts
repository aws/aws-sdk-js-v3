import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetConformancePackComplianceDetailsRequest, GetConformancePackComplianceDetailsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConformancePackComplianceDetailsCommandInput = GetConformancePackComplianceDetailsRequest;
export declare type GetConformancePackComplianceDetailsCommandOutput = GetConformancePackComplianceDetailsResponse & __MetadataBearer;
export declare class GetConformancePackComplianceDetailsCommand extends $Command<GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetConformancePackComplianceDetailsCommandInput;
    constructor(input: GetConformancePackComplianceDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
