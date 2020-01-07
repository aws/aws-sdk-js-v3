import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeTrustedAdvisorChecksRequest, DescribeTrustedAdvisorChecksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrustedAdvisorChecksCommandInput = DescribeTrustedAdvisorChecksRequest;
export declare type DescribeTrustedAdvisorChecksCommandOutput = DescribeTrustedAdvisorChecksResponse & __MetadataBearer;
export declare class DescribeTrustedAdvisorChecksCommand extends $Command<DescribeTrustedAdvisorChecksCommandInput, DescribeTrustedAdvisorChecksCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeTrustedAdvisorChecksCommandInput;
    constructor(input: DescribeTrustedAdvisorChecksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrustedAdvisorChecksCommandInput, DescribeTrustedAdvisorChecksCommandOutput>;
    private serialize;
    private deserialize;
}
