import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { RefreshTrustedAdvisorCheckRequest, RefreshTrustedAdvisorCheckResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RefreshTrustedAdvisorCheckCommandInput = RefreshTrustedAdvisorCheckRequest;
export declare type RefreshTrustedAdvisorCheckCommandOutput = RefreshTrustedAdvisorCheckResponse & __MetadataBearer;
export declare class RefreshTrustedAdvisorCheckCommand extends $Command<RefreshTrustedAdvisorCheckCommandInput, RefreshTrustedAdvisorCheckCommandOutput, SupportClientResolvedConfig> {
    readonly input: RefreshTrustedAdvisorCheckCommandInput;
    constructor(input: RefreshTrustedAdvisorCheckCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RefreshTrustedAdvisorCheckCommandInput, RefreshTrustedAdvisorCheckCommandOutput>;
    private serialize;
    private deserialize;
}
