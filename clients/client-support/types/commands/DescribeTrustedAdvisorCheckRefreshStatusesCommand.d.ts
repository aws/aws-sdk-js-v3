import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeTrustedAdvisorCheckRefreshStatusesRequest, DescribeTrustedAdvisorCheckRefreshStatusesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrustedAdvisorCheckRefreshStatusesCommandInput = DescribeTrustedAdvisorCheckRefreshStatusesRequest;
export declare type DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput = DescribeTrustedAdvisorCheckRefreshStatusesResponse & __MetadataBearer;
export declare class DescribeTrustedAdvisorCheckRefreshStatusesCommand extends $Command<DescribeTrustedAdvisorCheckRefreshStatusesCommandInput, DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput;
    constructor(input: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrustedAdvisorCheckRefreshStatusesCommandInput, DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput>;
    private serialize;
    private deserialize;
}
