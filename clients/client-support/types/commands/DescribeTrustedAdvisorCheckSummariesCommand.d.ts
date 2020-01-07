import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeTrustedAdvisorCheckSummariesRequest, DescribeTrustedAdvisorCheckSummariesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrustedAdvisorCheckSummariesCommandInput = DescribeTrustedAdvisorCheckSummariesRequest;
export declare type DescribeTrustedAdvisorCheckSummariesCommandOutput = DescribeTrustedAdvisorCheckSummariesResponse & __MetadataBearer;
export declare class DescribeTrustedAdvisorCheckSummariesCommand extends $Command<DescribeTrustedAdvisorCheckSummariesCommandInput, DescribeTrustedAdvisorCheckSummariesCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeTrustedAdvisorCheckSummariesCommandInput;
    constructor(input: DescribeTrustedAdvisorCheckSummariesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrustedAdvisorCheckSummariesCommandInput, DescribeTrustedAdvisorCheckSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
