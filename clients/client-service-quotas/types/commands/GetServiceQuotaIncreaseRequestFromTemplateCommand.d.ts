import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetServiceQuotaIncreaseRequestFromTemplateRequest, GetServiceQuotaIncreaseRequestFromTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServiceQuotaIncreaseRequestFromTemplateCommandInput = GetServiceQuotaIncreaseRequestFromTemplateRequest;
export declare type GetServiceQuotaIncreaseRequestFromTemplateCommandOutput = GetServiceQuotaIncreaseRequestFromTemplateResponse & __MetadataBearer;
export declare class GetServiceQuotaIncreaseRequestFromTemplateCommand extends $Command<GetServiceQuotaIncreaseRequestFromTemplateCommandInput, GetServiceQuotaIncreaseRequestFromTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput;
    constructor(input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceQuotaIncreaseRequestFromTemplateCommandInput, GetServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
