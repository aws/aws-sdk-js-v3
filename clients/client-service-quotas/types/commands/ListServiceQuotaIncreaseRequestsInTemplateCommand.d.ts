import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListServiceQuotaIncreaseRequestsInTemplateRequest, ListServiceQuotaIncreaseRequestsInTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListServiceQuotaIncreaseRequestsInTemplateCommandInput = ListServiceQuotaIncreaseRequestsInTemplateRequest;
export declare type ListServiceQuotaIncreaseRequestsInTemplateCommandOutput = ListServiceQuotaIncreaseRequestsInTemplateResponse & __MetadataBearer;
export declare class ListServiceQuotaIncreaseRequestsInTemplateCommand extends $Command<ListServiceQuotaIncreaseRequestsInTemplateCommandInput, ListServiceQuotaIncreaseRequestsInTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput;
    constructor(input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServiceQuotaIncreaseRequestsInTemplateCommandInput, ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
