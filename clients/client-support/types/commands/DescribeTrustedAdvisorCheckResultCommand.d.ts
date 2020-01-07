import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeTrustedAdvisorCheckResultRequest, DescribeTrustedAdvisorCheckResultResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrustedAdvisorCheckResultCommandInput = DescribeTrustedAdvisorCheckResultRequest;
export declare type DescribeTrustedAdvisorCheckResultCommandOutput = DescribeTrustedAdvisorCheckResultResponse & __MetadataBearer;
export declare class DescribeTrustedAdvisorCheckResultCommand extends $Command<DescribeTrustedAdvisorCheckResultCommandInput, DescribeTrustedAdvisorCheckResultCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeTrustedAdvisorCheckResultCommandInput;
    constructor(input: DescribeTrustedAdvisorCheckResultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrustedAdvisorCheckResultCommandInput, DescribeTrustedAdvisorCheckResultCommandOutput>;
    private serialize;
    private deserialize;
}
