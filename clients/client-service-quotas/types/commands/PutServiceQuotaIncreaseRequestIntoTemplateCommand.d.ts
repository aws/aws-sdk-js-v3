import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { PutServiceQuotaIncreaseRequestIntoTemplateRequest, PutServiceQuotaIncreaseRequestIntoTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutServiceQuotaIncreaseRequestIntoTemplateCommandInput = PutServiceQuotaIncreaseRequestIntoTemplateRequest;
export declare type PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput = PutServiceQuotaIncreaseRequestIntoTemplateResponse & __MetadataBearer;
export declare class PutServiceQuotaIncreaseRequestIntoTemplateCommand extends $Command<PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput;
    constructor(input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
